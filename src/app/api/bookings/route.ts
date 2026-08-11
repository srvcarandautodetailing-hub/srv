import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// GET → fetch all bookings for admin dashboard
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const bookings = (data || []).map((row) => ({
      id: row.id,
      createdAt: row.created_at,
      name: row.name,
      phone: row.phone,
      email: row.email,
      address: row.address || '',
      service: row.service,
      date: row.date,
      time: row.time,
      notes: row.notes || '',
      status: row.status || 'Pending',
    }));

    return NextResponse.json({ success: true, data: bookings });
  } catch (error: any) {
    console.error('Failed to fetch bookings:', error);
    return NextResponse.json(
      { success: false, data: [], message: 'Failed to load bookings: ' + error.message },
      { status: 500 }
    );
  }
}

// POST → create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = (body.name || body.fullName || '').trim();

    if (!name || !body.phone || !body.email || !body.service || !body.date || !body.time) {
      return NextResponse.json(
        { success: false, message: 'Name, phone, email, service, date and time are required.' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from('bookings').insert({
      name,
      phone: body.phone,
      email: body.email,
      address: body.address || '',
      service: body.service,
      date: body.date,
      time: body.time,
      notes: body.notes || '',
      status: 'Pending',
    });

    if (error) throw error;

    // Non-blocking email notification via Resend (optional)
    if (process.env.RESEND_API_KEY) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bookings <bookings@srvdetailing.co.uk>',
          to: ['srv_detailing@icloud.com'],
          subject: `New Booking: ${body.service} — ${name}`,
          html: `
            <h2>New Booking Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Service:</strong> ${body.service}</p>
            <p><strong>Date:</strong> ${body.date}</p>
            <p><strong>Time:</strong> ${body.time}</p>
            <p><strong>Notes:</strong> ${body.notes || 'None'}</p>
            <p><em>View all bookings: <a href="https://www.srvdetailing.co.uk/admin">Admin Panel</a></em></p>
          `,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, message: 'Booking created successfully' });
  } catch (error: any) {
    console.error('Failed to create booking:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create booking: ' + error.message },
      { status: 500 }
    );
  }
}
