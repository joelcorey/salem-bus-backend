CREATE TABLE delays (
  id SERIAL PRIMARY KEY,
  user_id INT,
  stop_id INT,
  stop_number INT,
  route_id INT,
  route_short_name TEXT,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);