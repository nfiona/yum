var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});

db.once('open', () => {
  console.log("database has been connected!");
});

// Create Schemas
var Schema = mongoose.Schema;
  ObjectId = Schema.ObjectId

var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ {type: Schema.ObjectId, ref: "Menu"}]
})

var Menu = mongoose.model("Menu", MenuSchema )
var Restaurant = mongoose.model("Restaurant", RestaurantSchema )
