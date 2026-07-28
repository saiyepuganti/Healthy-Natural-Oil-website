/*
# Create orders and contact messages tables

1. New Tables
- `orders` — stores customer orders for natural oils
  - id (uuid, primary key)
  - customer_name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - address (text, not null)
  - city (text, not null)
  - pincode (text, not null)
  - items (jsonb, not null) — array of {name, price, quantity}
  - total (numeric, not null)
  - status (text, default 'pending')
  - created_at (timestamp)
- `contact_messages` — stores messages from the contact form
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text)
  - message (text, not null)
  - created_at (timestamp)

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD because this is a no-auth public storefront.
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  pincode text NOT NULL,
  items jsonb NOT NULL,
  total numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "anon_select_orders" ON orders FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_orders" ON orders;
CREATE POLICY "anon_update_orders" ON orders FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_orders" ON orders;
CREATE POLICY "anon_delete_orders" ON orders FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_messages" ON contact_messages;
CREATE POLICY "anon_select_messages" ON contact_messages FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_messages" ON contact_messages;
CREATE POLICY "anon_insert_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_messages" ON contact_messages;
CREATE POLICY "anon_update_messages" ON contact_messages FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_messages" ON contact_messages;
CREATE POLICY "anon_delete_messages" ON contact_messages FOR DELETE
  TO anon, authenticated USING (true);
