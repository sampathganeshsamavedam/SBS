const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
  s_no: {
    type: Number,
    required: true,
  },
  Chainage: {
    type: Number,
    required: true,
  },
  Road_crossing: {
    type: String,
    required: true,
  },
  Farmer_name_Upstream: {
    type: String,
    required: true,
  },
  Farmer_contact_Upstream: {
    type: String ,
    required: true,
  },
  Farmer_name_Downstream: {
    type: String,
    required: true,
  },
  Farmer_contact_Downstream: {
    type: String,
    required: true,
  },
  Map_link: {
    type: String,
  },
});

FarmerSchema.set('collection', 'farmer');

const Farmer = mongoose.model("farmer", FarmerSchema);

module.exports = Farmer;
