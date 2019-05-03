CREATE TABLE trips(
	route_id INT REFERENCES routes(route_id),
	service_id VARCHAR,
	trip_id INT PRIMARY KEY,
	trip_headsign TEXT,
	trip_short_name TEXT,
	direction_id INT,
	block_id TEXT,
	shape_id TEXT,
	wheelchair_accessible INT,
	bikes_allowed INT
);

-- route_id,
-- service_id,
-- trip_id,
-- trip_headsign,
-- trip_short_name,
-- direction_id,
-- block_id,
-- shape_id,
-- wheelchair_accessible,
-- bikes_allowed
