## Updated user stories
- The user will be able to register, login, and logout
- The user will be able to choose from and/or filter by bus route
- The user will be able to choose stop they are waiting at
- The user will be able to press 1 of 5 buttons: 1.) The bus is more than 10 minutes early 2.) the bus is 5 minutes early 3.) The bus is on time 4.) The bus is 5 minutes late 5.) The bus is more than 10 minutes late
- The user will be able to see updates from other users for all buses, or filter for a specific bus

## Backend user stories and routes explanation

## Data migration and seeing
Scrape Salem, OR data such as routes and bus stops from here:
https://www.cherriots.org/data/

If migrating/seeding on a Linux machine that requires it, place in all CSV/TXT data '/tmp' folder for linux. This prevents permissions errors. The '/tmp' folder was designed for this use case, so use it.

the 'tmp-data' folder is a temporary folder of the data that should be in the actual data storage directory. As above, it is recommended that this be '/tmp'.