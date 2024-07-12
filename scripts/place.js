let currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

let lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified

var temp = 29;
var wSpeed = 11;
var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windchill=Math.round(windchill);
document.getElementById("windchill").innerHTML=windchill;
