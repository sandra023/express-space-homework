// DEPENDENCIES
const express = require('express');
const app = express();


// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages



// PORT
const port = 3000;

const marsMissions = require('./models/marsMissions')
app.use(express.static('./public'));

app.get('/marsMissions', (req,res) => {
    // res.send(marsMissions)
    res.render('./missions/index.ejs',{
      marsMissions: marsMissions
    })
})


app.get('/marsMissions/:index',(req,res) => {
  res.render('./missions/show.ejs',{
        marsMissions: marsMissions[req.params.index]
  })
}) 

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
