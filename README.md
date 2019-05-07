## Updated user stories
- The user will be able to register, login, and logout
- The user will be able to choose from and/or filter by bus route
- The user will be able to choose stop they are waiting at
- The user will be able to press 1 of 5 buttons: 1.) The bus is more than 10 minutes early 2.) the bus is 5 minutes early 3.) The bus is on time 4.) The bus is 5 minutes late 5.) The bus is more than 10 minutes late
- The user will be able to see updates from other users for all buses, or filter for a specific bus

## Backend user stories and routes explanation

## Data migration and seeing
Source data such as routes and bus stops from here:
https://www.cherriots.org/data/

If seeding on a Linux machine, place all CSV/TXT data in to '/tmp/salem-or-bus' folder for linux. This prevents permissions errors.

If seeing on a Windows machine, edit the line "FROM '/tmp/salem-or-us/routes.txt' WITH DELIMITER ',' CSV HEADER;" to reflect the correct directory.

npm migrate -- 0 to reset / undo database
npm migrate -- run migrations

This project requires a database calles salembus

psql -d salembus -f ./seeds/seed.salembus_tables.sql


the 'tmp-data' folder is a temporary folder of the data that should be in the actual data storage directory. As above, it is recommended that this be '/tmp'.

## Related notes:

Latitude designates North and South of the Equator. Longitude designates East and West of the Prime Meridian.

A negative latitude means South of the Equator, and a negative longitude means West of the Prime Meridian.

Location data is often represented in the form of latitude and longitude pairs like below:

37.427619, -122.166972
[Hoover Tower, Stanford University]

The simple framework below can help you decode the location pairs.

+ + : North and East
+ - : North and West
- - : South and West
- + : South and East