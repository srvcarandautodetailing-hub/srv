-- SRV Detailing Booking System
-- Run this in: Supabase Dashboard → SQL Editor → New Query

-- ─── BOOKINGS TABLE ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS bookings (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name        TEXT NOT NULL,
  phone       TEXT NOT NULL,
  email       TEXT NOT NULL,
  address     TEXT,
  service     TEXT NOT NULL,
  date        DATE NOT NULL,
  time        TEXT NOT NULL,
  notes       TEXT,
  status      TEXT NOT NULL DEFAULT 'Pending'
                CHECK (status IN ('Pending', 'Confirmed', 'Cancelled', 'Completed'))
);

-- Auto-update updated_at on row changes
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_bookings_updated_at ON bookings;
CREATE TRIGGER set_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Indexes for admin filtering / sorting
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_date       ON bookings (date);
CREATE INDEX IF NOT EXISTS idx_bookings_status     ON bookings (status);
CREATE INDEX IF NOT EXISTS idx_bookings_service    ON bookings (service);
CREATE INDEX IF NOT EXISTS idx_bookings_email      ON bookings (email);

-- ─── CONTACT MESSAGES TABLE ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  message    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages (created_at DESC);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────────────────────
-- All data access goes through Next.js API routes that use the service-role key.
-- The service-role key bypasses RLS, so no policies are needed for the app to work.
-- Enabling RLS with NO policies blocks all direct anon/authenticated REST access,
-- which prevents anyone from reading booking data directly via the Supabase API.

ALTER TABLE bookings         ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
