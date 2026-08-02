CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text,
  consultation_type text NOT NULL DEFAULT 'General Consultation',
  preferred_date date,
  preferred_time time,
  message text,
  status text NOT NULL DEFAULT 'pending'
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_consultations_anon" ON consultations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "select_consultations_admin" ON consultations FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "update_consultations_admin" ON consultations FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_consultations_admin" ON consultations FOR DELETE
  TO authenticated USING (true);

CREATE INDEX consultations_created_at_idx ON consultations (created_at DESC);
CREATE INDEX consultations_status_idx ON consultations (status);
CREATE INDEX consultations_email_idx ON consultations (email);
