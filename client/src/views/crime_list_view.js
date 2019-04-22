const PubSub = require("../helpers/pub_sub.js");
const CrimeItemView = require("./crime_item_view.js");
const Crime = require("../models/crime.js");

const CrimeListView = function() {
  this.crimes = [];
};

CrimeListView.prototype.render = function() {
  if (this.crimes.length === 0) return;
  this.crimes.forEach(crime => {
    const crimeItemView = new CrimeItemView(crime);
    crimeItemView.render();
  });
};

CrimeListView.prototype.populate = function(evt) {
  this.clear();
  const crimeData = evt.detail;
  console.log("this is crime data", crimeData);
  for (crime of crimeData) {
    this.crimes.push(new Crime(crime));
  }
  this.render();
};

CrimeListView.prototype.clear = function() {
  document.querySelector("#information").innerHTML = "";
  this.crimes = [];
};

CrimeListView.prototype.bindEvents = function() {
  PubSub.subscribe("App:top-10-crime", evt => {
    this.populate(evt);
  });
  PubSub.subscribe("App:number-of-crime", evt => {
    this.getNumberOfCrimes(evt);
  });
};

CrimeListView.prototype.getNumberOfCrimes = function(evt) {
  const container = document.querySelector("#number");
  container.textContent = `Total Number of Crimes in this Area: ${evt.detail}`;
};
module.exports = CrimeListView;
