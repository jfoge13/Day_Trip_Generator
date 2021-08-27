

// //random generator function
let transportationArray = ['Bus', 'Plane', 'Helicopter', 'Car', 'Limousine', 'Horse', 'Dunebug', 'Hot air Balloon', 'Pack mule'];
let restaurantArray = ['Pascolo Ristorante (Italian)', 'Bubbas Smokehouse (BBQ)', 'Feng Yua Kitchen (Chinese)', 'King of the Roll (Sushi)', 'Cafe Elouise (French)', 'Tio Gordo (Mexican)'];
let destinationArray = ['Portland, ME', 'Providence, RI', 'Boston, MA', 'Las Vegas, NV', 'Tampa Bay, FL', 'Salt Lake City, UT', 'Denver, CO', 'Houston, TX', 'Yuma, AZ'];
let entertainmentArray = ['Movie', 'Play', 'Horse Race', 'Casino', 'State Fair', 'Concert', 'Ballet', 'Opera', 'Monster Car Rally'];




















function generateRandomElement(someArray){
     return someArray[Math.floor(Math.random() * someArray.length)];
    
}


let destination = generateRandomElement(destinationArray);
let transportation = generateRandomElement(transportationArray);
let restaurant = generateRandomElement(restaurantArray);
let entertainment = generateRandomElement(entertainmentArray);


let itineraryCorrections = prompt("What about this trip would you like to change? Example: Entertainment, restaurant, transportation, destination").toLowerCase;
let destinationCorrection = "destination";
let restaurantCorrection = "restaurant";
let transportationCorrection = "transportation";
let entertainmentCorrection = "entertainment";

//allow for factoring of multiple individual elements of user input and generate new individual output
// if (itineraryCorrections.includes(destinationCorrection)){
//     console.log("Your new destination is " + destination);}
// if (itineraryCorrections.includes(restaurantCorrection)){
//     console.log("Your new restaurant is " + restaurant)}
// if (itineraryCorrections.includes(transportationCorrection)){
//     console.log("Your new mode of transportation is " + transportation)}
// if (itineraryCorrections.includes(entertainmentCorrection)){
//     console.log("Your new scheduled entertainment is " + entertainment)
// }



let entertainmentStatement = "Your new scheduled entertainment is "
let transportationStatement = "Your new mode of transportation is "
let restaurantStatement = "Your new restaurant is "
let destinationStatement = "Your new destination is "



function itineraryCorrectionsFunction(someString, someStatement, someArray){
   if (itineraryCorrections.includes((someString)))
   console.log(someStatement + someArray);
}

let theResult = itineraryCorrectionsFunction(restaurantCorrection, restaurantStatement, restaurant);
console.log(theResult);