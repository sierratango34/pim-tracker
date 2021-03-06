const PubSub = require("../helpers/pub_sub.js");

const Crime = function(params) {
  this.category = params.category;
  this.streetName = params.location.street.name;
  this.date = params.month;
  this.lat = params.location.latitude;
  this.lng = params.location.longitude;
  this.outcome = null;
  if (params.outcome) {
    this.outcome = {
      category: params.outcome_status.category,
      date: params.outcome_status.date
    };
  } else {
    this.outcome = {
      category: "No information on outcome",
      date: "N/A"
    };
  }
};

module.exports = Crime;
