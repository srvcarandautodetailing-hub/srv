import { NextRequest, NextResponse } from 'next/server';
import { supabaseUrl, supabaseHeaders } from '@/lib/supabase';

export async function GET() {
  try {
    const res = await fetch(
      supabaseUrl('bookings?select=*&order=created_at.desc'),
      { headers: supabaseHeaders() }
    );

    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();

    const bookings = (data || []).map((row: Record<string, unknown>) => ({
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
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to fetch bookings:', msg);
    return NextResponse.json(
      { success: false, data: [], message: 'Failed to load bookings: ' + msg },
      { status: 500 }
    );
  }
}

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

    const res = await fetch(supabaseUrl('bookings'), {
      method: 'POST',
      headers: { ...supabaseHeaders(), Prefer: 'return=minimal' },
      body: JSON.stringify({
        name,
        phone: body.phone,
        email: body.email,
        address: body.address || '',
        service: body.service,
        date: body.date,
        time: body.time,
        notes: body.notes || '',
        status: 'Pending',
      }),
    });

    if (!res.ok) throw new Error(await res.text());

    if (process.env.RESEND_API_KEY) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
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
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to create booking:', msg);
    return NextResponse.json(
      { success: false, message: 'Failed to create booking: ' + msg },
      { status: 500 }
    );
  }
}
