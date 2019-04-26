COPY trips (
	route_id,
	service_id,
	trip_id,
	trip_headsign,
	trip_short_name,
	direction_id,
	block_id,
	shape_id,
	wheelchair_accessible, 
	bikes_allowed
) 
FROM '/tmp/salem-or-us/trips.txt' WITH DELIMITER ',' CSV HEADER;

COPY routes(
	route_id,
	agency_id,
	route_short_name,
	route_long_name,
	route_desc,
	route_type,
	route_url,
	route_color,
	route_text_color)
FROM '/tmp/salem-or-us/routes.txt' WITH DELIMITER ',' CSV HEADER;

COPY shapes (
	shape_id,
	shape_pt_lat,
	shape_pt_lon,
	shape_pt_sequence,
	shape_dist_traveled
)
FROM '/tmp/salem-or-us/shapes.txt' WITH DELIMITER ',' CSV HEADER;

COPY stop_times(
	trip_id,
	arrival_time,
	departure_time,
	stop_id,
	stop_sequence,
	stop_headsign,
	pickup_type,
	drop_off_type,
	shape_dist_traveled
)
FROM '/tmp/salem-or-us/stop_times.txt' WITH DELIMITER ',' CSV HEADER;
