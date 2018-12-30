var cities = ["KHI", "LHR", "ISB"];
var cityFound = false;


for(var myCounter=0; myCounter < cities.length; myCounter++)
{
    if(cities[myCounter] == "KHI")
    {
        cityFound = true;
        break;
    }

}

if(cityFound == true)
    console.log("City found.");
else
console.log("City NOT found.");
