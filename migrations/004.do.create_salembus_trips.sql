CREATE TABLE trips(
	trip_id INT PRIMARY KEY,
	route_id INT REFERENCES routes(route_id),
	service_id VARCHAR,
	trip_headsign TEXT,
	trip_short_name TEXT,
	direction_id INT,
	block_id INT,
	shape_id INT REFERENCES shapes(shape_id),
	wheelchair_accessible INT,
	bikes_allowed INT
);