CREATE TABLE stops (
	stop_id INT PRIMARY KEY,
	stop_code TEXT,
	stop_name TEXT,
	stop_desc TEXT,
	stop_lat NUMERIC(8, 6),
	stop_lon NUMERIC(9, 6),
	zone_id TEXT,
	stop_url TEXT,
	location_type TEXT,
	parent_station TEXT,
	stop_timezone TEXT,
	wheelchair_boarding INT
)