## Backend user stories and routes explanation

## Data migration and seeing
Scrape Salem, OR data such as routes and bus stops from here:
https://www.cherriots.org/data/

If migrating/seeding on a Linux machine that requires it, place in all CSV/TXT data '/tmp' folder for linux. This prevents permissions errors. The '/tmp' folder was designed for this use case, so use it.

trips.txt:
- route_id - 
- service_id - NA, some kind of date range
- trip_id - 
- trip_headsign - long form title
- trip_short_name - NULL/not provided
- direction_id - 0 or 1
- block_id - NA
- shape_id - Foreign key to shapes.txt
- wheelchair_accessible - 
- bikes_allowed - 

direction_id is a 0 or 1. Not sure what this means, can extrapolate bus direction from estimated stop times at stop id's via stop_times.txt