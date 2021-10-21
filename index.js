/**
 * Load express module
 * Load body-parser module
 * Load swagger-jsdoc module
 * Load swagger-ui-express module
 */
 const express = require("express");
 const bodyParser = require("body-parser");
 const swaggerJsDoc = require("swagger-jsdoc");
 const swaggerUI = require("swagger-ui-express");
 
 /** Call the express function and puts new Express application in app object */
 const app=express();
 app.use(bodyParser.urlencoded({extended:true}));

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:"IPL Team's API",
            description:"IPL Teams",
            contact:{
                name:"Ujjwal Kumar"
            },
            servers:["https://localhost:3000"]
        }
    },
    apis:["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

/** Importing the playerRecords data from data.js file */
const playerRecords = require('./data.js');

/**
 * @swagger
 * /:
 *  get:
 *      summary: Homepage
 *      description: Used to display about other endpoints of the API.
 *      responses:
 *          200:
 *              description: The player details are successfully added 
 */
app.get('/',function(req,res){
    res.status(200).write("This is Homepage");
    res.write("\nUse /add for adding new player to the records");
    res.write("\nUse /records for getting all the available player records");
    res.end();
});

/**
 * @swagger
 * /records:
 *  get:
 *      summary: Displays entire player records available.
 *      description: Responds with the playerRecords details when a get request is made to the /records page.
 *      responses:
 *          200:
 *              description: The player details are successfully added 
 */
 app.get('/records',function(req,res){
    res.write("<h1>Player Records</h1>");
    res.write("<b>&emsp;Name&emsp;Team</b><br>");
    for(let x of playerRecords){
        res.write("<br>&emsp;"+x.name+"&emsp;"+x.team);
    }
    res.write("<br>");
    res.status(200).write("<h5>For adding new players please use /add endpoint");
    res.end();
});

/**
 * @swagger
 * /add:
 *  post:
 *      summary: Creates a new player record.
 *      description: It posts the the player name and the team name as a json object
 *      responses:
 *          200:
 *              description: The player details are successfully added
 */

app.post("/add",async(req,res)=>{
    const player={
        name:req.body.name,
        team:req.body.team
    };
    await playerRecords.push(player);
    res.status(200).send(player.name+" details added successfully");
});

module.exports=app;