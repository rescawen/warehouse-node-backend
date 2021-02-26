# Reaktor Warehouse Node Backend
This repository is deployed to heroku and contains the work around for legacy bad-api

### Description 

Uses [fetch-json](https://www.npmjs.com/package/fetch-json) to get the JSON "database" files from bad-api. Actual server is done with [json-server](https://www.npmjs.com/package/json-server) since the JSON files were already neatly formatted for one to create routing around them.

The node server consists of routing files which are [database](https://github.com/rescawen/warehouse-node-backend/blob/main/db.js) and [routes](https://github.com/rescawen/warehouse-node-backend/blob/main/routes.json). The most interesting script is the probably the [api](https://github.com/rescawen/warehouse-node-backend/blob/main/api.js) which does the fetching of the JSON files from bad api. 

The basic of the [api](https://github.com/rescawen/warehouse-node-backend/blob/main/api.js) script is to go through all 3 categories which are beanies, facemasks and gloves and the 6 of a maximum of 8 different manufacturers. 

1. A for loop for the product categories is placed in an asynchronous function that gets the json files of each category. We then parse through these to find out the manufacturers which is returned at the of the function as its output. 
2. Once we know which manufacturers we are dealing with, a similar loop is done for manufacturers and we save the respective json files.

![diagram](https://github.com/rescawen/reaktor-warehouse-app/blob/main/diagrams/reaktorwarehousebackend%20(2).png)

This diagram hopefully explains the dense ~30 lines of code in [api](https://github.com/rescawen/warehouse-node-backend/blob/main/api.js) in a straight forward way. The main advantage of this model is having the same code run regardless of the situation. This makes it easy for this node server to match the 5 minute cache of bad-api. In addition most of the time when things are operating correctly, we do not accidentally replace a functioning json file in manufacturers with an empty response. 

### Front-end React app at [separate repository](https://github.com/rescawen/reaktor-warehouse-app)  
