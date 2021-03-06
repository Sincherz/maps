const express = require("express");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5962;


app.get("/:mysearch", function (req, res) {
  // We create an html file:

  var s = "https://maps.googleapis.com/maps/api/staticmap?center=";
  var add = req.params.mysearch;
  var p =
    "&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyBqEHL1pIz1FzU6Sit8eCWYDo-wfMyj210";
  s = s + add + p;
  console.log(s);
  res.send(s);
});

const hostname = "http://flip3.engr.oregonstate.edu:";
const port = 5962;

// Start the server on the port
app.listen(PORT, () => console.log(Listening on PORT: ${PORT})); 
