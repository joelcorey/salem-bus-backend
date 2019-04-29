CREATE TABLE routes (
	route_id INT PRIMARY KEY,
	agency_id TEXT,
	route_short_name TEXT,
	route_long_name TEXT,
	route_desc TEXT,
	route_type INT,
	route_url TEXT,
	route_color TEXT,
	route_text_color TEXT
);