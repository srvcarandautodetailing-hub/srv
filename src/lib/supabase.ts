function headers() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  };
}

export function supabaseUrl(path: string) {
  return `${process.env.SUPABASE_URL}/rest/v1/${path}`;
}

export function supabaseHeaders() {
  return headers();
}
