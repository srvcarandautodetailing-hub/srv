import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const { error } = await getSupabaseAdmin().from('contact_messages').insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Message received — we will be in touch shortly.' });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please call us on 07375 759686.' },
      { status: 500 }
    );
  }
}
