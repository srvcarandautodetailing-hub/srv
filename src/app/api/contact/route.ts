import { NextRequest, NextResponse } from 'next/server';
import { supabaseUrl, supabaseHeaders } from '@/lib/supabase';

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

    const res = await fetch(supabaseUrl('contact_messages'), {
      method: 'POST',
      headers: { ...supabaseHeaders(), Prefer: 'return=minimal' },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({ success: true, message: 'Message received — we will be in touch shortly.' });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Contact form error:', msg);
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please call us on 07375 759686.' },
      { status: 500 }
    );
  }
}
