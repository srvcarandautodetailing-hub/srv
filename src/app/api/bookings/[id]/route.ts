import { NextRequest, NextResponse } from 'next/server';
import { supabaseUrl, supabaseHeaders } from '@/lib/supabase';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await request.json();
    const { id } = await params;

    if (!status) {
      return NextResponse.json(
        { success: false, message: 'Status is required' },
        { status: 400 }
      );
    }

    const res = await fetch(supabaseUrl(`bookings?id=eq.${id}`), {
      method: 'PATCH',
      headers: { ...supabaseHeaders(), Prefer: 'return=minimal' },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({ success: true, message: 'Booking status updated successfully' });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to update booking status:', msg);
    return NextResponse.json(
      { success: false, message: 'Failed to update booking status: ' + msg },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const res = await fetch(supabaseUrl(`bookings?id=eq.${id}`), {
      method: 'DELETE',
      headers: { ...supabaseHeaders(), Prefer: 'return=minimal' },
    });

    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({ success: true, message: 'Booking deleted successfully' });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Failed to delete booking:', msg);
    return NextResponse.json(
      { success: false, message: 'Failed to delete booking: ' + msg },
      { status: 500 }
    );
  }
}
