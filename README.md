# warehouse-node-backend
Repository that is deployed to heroku and work around for legacy api

### Description 
The text below is duplicate to the main app repo linked below.

Uses fetch-json to get the JSON "database" files from bad-api. Actual server is done with json-server since the JSON files were already neatly formatted for one to create routing around them.

The node server consists of routing files which are [database](https://github.com/rescawen/warehouse-node-backend/blob/main/db.js) and [routes](https://github.com/rescawen/warehouse-node-backend/blob/main/routes.json). The most interesting script is the probably the [api](https://github.com/rescawen/warehouse-node-backend/blob/main/api.js) which does the fetching of the JSON files from bad api. 

### Front-end React app at [separate repository](https://github.com/rescawen/reaktor-warehouse-app)  
