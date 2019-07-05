# CS 313-nodejs
NodeJS Getting Started Training Project

lEARN *Really* cOOL & nEEDED sTUFF FROM https://nodeschool.io/

This Project has the contents for solving the challenges of learnyounode npm module
(install and run this tool by doing:
$ sudo npm install learnyounode -g
$ learnyounode
and following the instructions of each challenge
)


## ALLWAYS TO KEEP ... VERY VERY BASIC GOOD PRACTICES

Allways start your projects with:
$ npm init
(from the project root directory)

and allways make sure your settings are like this: 
$ npm config set save=true
$ npm config set save-exact=true
(becasue that way your dependencies will always be installed locally, will always be added to the package.json and will always be kept with the installed version)
(this settigs are saved in the ~/.npmrc file for you to verify [and are installed per user, in case you want to install them globally you can do for example $ npm config set save=true -g .... and those will be saved in /usr/etc/npmrc ])

if you do that you just download your code which should come including your package.json file and whoever wants to get dependencies just need to do:
$ npm install

## If you want to have everything in this project or if you want to have url redirection to another JS file you need to have that as a router and used in your index to redirect to it ... like this :
![howToSeveralRedirectToJS](https://raw.githubusercontent.com/Ortega-Dan/node-js-getting-started/master/READMEimages/HowToRouteFromVariousJSfiles.png)
