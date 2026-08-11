import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// PUT → update booking status
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

    const { error } = await supabaseAdmin
      .from('bookings')
      .update({ status })
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Booking status updated successfully' });
  } catch (error: any) {
    console.error('Failed to update booking status:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update booking status: ' + error.message },
      { status: 500 }
    );
  }
}

// DELETE → permanently delete a booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { error } = await supabaseAdmin
      .from('bookings')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Booking deleted successfully' });
  } catch (error: any) {
    console.error('Failed to delete booking:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete booking: ' + error.message },
      { status: 500 }
    );
  }
}
