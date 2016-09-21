FPDS
============
Cool stuff and documentation things to go here...  

Grunt
------------
**Description:**  
Use Grunt for compiling SASS and JS as well as propagating 3rd party libraries.  

**Usage:**  
Navigate to the grunt directory  
`cd _presentation/grunt`  

Then run the command  
`grunt`

Any changes made will be automatically detected by the watchers and spin off a build.

Node.js
------------
**Description:**  
Use Node.js for server-side development.

**Usage:**  
Navigate to the node directory  
`cd _node`

Then run the command  
`npm start`

Angular.js
-----------
**Description:**  
Front-end framework used for templating and portal navigation  

**Directories:**  
`/views/` - location of templates  
`/views/layout/` - pages templates  
`/views/includes/` - partial templates  
`/_presentation/js/angular/` - raw angular js files  
`/_presentation/js/angular/components` - angular compontents to include  
`/_presentation/js/angular/master_modules` - modules in this directory are combined into one js file  
`/_presentation/js/angular/modules` - modules in this directory must be loaded up separately  

**Files:**  
`*.config.js` - configuration  
`*.controller.js` - controller  
`*.directive.js` - directive  
`*.filter.js` - filter  
`*.routes.js` - routes configuration  
`*.service.js` - injectable service  

`/_presentation/js/angular/master_modules/_app.js` - initializes the angular app  
`/_presentation/js/angular/master_modules/_app.routes.js` - declares different url routes  
`/_presentation/js/angular/master_modules/app.controller.js` - main controller for the angular app  

AWS Instance
-------------
**Whitelisted IP Address**  
We are currently whitelisting IP addresses for security restrictions within the .htaccess file. 

To add a new IP address:  
`cd /var/www/html`  

Then open the `.htaccess` file  

Append the new IP address using the format:  
`Allow from XXX.XXX.XXX.XXX`  

**Run the Node Instance**  
Navigate to the node foler  
`cd /var/www/html/_node`  

Then start it up using the command:  
`npm start`