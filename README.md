## Updated user stories
This is the back end for the Salem Bus web app.
See https://github.com/joelcorey/salem-bus-frontend/blob/master/README.md for primary user stories.

## End points: 
- /api/stops
- /api/stops/times/:stopId/HH:MM:SS
- /api/delays
- /api/routes

## First time install and run
- npm i
- complete section 'Data migration and seeding'
- npm run

## Data migration and seeing
Source data such as routes and bus stops from here:
https://www.cherriots.org/data/

If seeding on a Linux machine, place all CSV/TXT data in to '/tmp/salem-or-bus' folder for linux. This prevents permissions errors in the file-system.

If seeing on a Windows machine, edit the line "FROM '/tmp/salem-or-us/routes.txt' WITH DELIMITER ',' CSV HEADER;" to reflect the correct directory.

npm migrate -- 0 to reset / undo database
npm migrate -- run migrations

This project requires a database calles salembus

psql -d salembus -f ./seeds/seed.salembus_tables.sql

the 'tmp-data' folder is a temporary folder of the data that should be in the actual data storage directory. As above, it is recommended that this be '/tmp'.
