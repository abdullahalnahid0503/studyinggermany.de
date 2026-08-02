CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  source text DEFAULT 'website'
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_newsletter_anon" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "select_newsletter_admin" ON newsletter_subscribers FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "delete_newsletter_admin" ON newsletter_subscribers FOR DELETE
  TO authenticated USING (true);

CREATE INDEX newsletter_email_idx ON newsletter_subscribers (email);
