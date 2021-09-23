const express = require('express');
const { port } = require('./config');

const app = express();
//--------------REQUESTS--------------//
/**
 * Takes a single parameter `name`, returns a string in response.
 * the response String is `Happy Birthday, <name>!`
 * e.g. name = "Elon Musk"
 *      response = "Happy Birthday, Elon Musk!"
 */
app.post('/sendName', (req, res) => {
    // getting the name parameter.
    const name = req.query.name;
    if(name == null) {
        // checking if the request is valid or not.
        console.log("Invalid request, name parameter was empty"); // log
        res.statusCode = 400; // bad request
        res.statusMessage = "Name parameter was empty. You must provide a name";
        res.send();
    } else {
        res.send("Happy Birthday, " + name +"!");
    }
});


app.listen(port, () => console.log("happy birthday app running at port 8080"));