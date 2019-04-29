CREATE TABLE stops (
	stop_id INT PRIMARY KEY,
	stop_code TEXT,
	stop_name TEXT,
	stop_desc TEXT,
	stop_lat REAL,
	stop_lon REAL,
	zone_id TEXT,
	stop_url TEXT,
	location_type TEXT,
	parent_station TEXT,
	stop_timezone TEXT,
	wheelchair_boarding INT
)