import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const checks: Record<string, string> = {};

  // 1. Check env vars present
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  checks.supabase_url = supabaseUrl ? `set (${supabaseUrl})` : 'MISSING';
  checks.service_role_key = serviceKey
    ? `set (length=${serviceKey.length})`
    : 'MISSING';

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ ok: false, checks }, { status: 500 });
  }

  // 2. Test Supabase connection by selecting 1 row
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/bookings?select=id&limit=1`,
      {
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
        },
      }
    );

    if (!res.ok) {
      const body = await res.text();
      checks.supabase_query = `FAILED ${res.status}: ${body}`;
      return NextResponse.json({ ok: false, checks }, { status: 500 });
    }

    const data = await res.json();
    checks.supabase_query = `OK — bookings table exists, ${data.length} row(s) returned`;
  } catch (err: any) {
    checks.supabase_query = `ERROR: ${err.message}`;
    return NextResponse.json({ ok: false, checks }, { status: 500 });
  }

  return NextResponse.json({ ok: true, checks });
}
