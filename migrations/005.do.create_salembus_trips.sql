CREATE TABLE trips(
	trip_id INT PRIMARY KEY,
	route_id INT REFERENCES routes(route_id),
	service_id VARCHAR,
	trip_headsign VARCHAR,
	trip_short_name VARCHAR,
	direction_id INT,
	block_id INT,
	shape_id INT,
	wheelchair_accessible INT,
	bikes_allowed INT
);