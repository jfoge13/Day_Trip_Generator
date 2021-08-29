// Establish initial arrays

let transportationArray = ['Bus', 'Plane', 'Helicopter', 'Car', 'Limousine', 'Horse', 'Dunebug', 'Hot air Balloon', 'Pack mule'];
let restaurantArray = ['Pascolo Ristorante (Italian)', 'Bubbas Smokehouse (BBQ)', 'Feng Yua Kitchen (Chinese)', 'King of the Roll (Sushi)', 'Cafe Elouise (French)', 'Tio Gordo (Mexican)'];
let destinationArray = ['Portland, ME', 'Providence, RI', 'Boston, MA', 'Las Vegas, NV', 'Tampa Bay, FL', 'Salt Lake City, UT', 'Denver, CO', 'Houston, TX', 'Yuma, AZ'];
let entertainmentArray = ['Movie', 'Play', 'Horse Race', 'Casino', 'State Fair', 'Concert', 'Ballet', 'Opera', 'Monster Car Rally'];


//create random generation function

function generateRandomElement(someArray){
    return someArray[Math.floor(Math.random() * someArray.length)];
   
}

//program initialize with user input


let userInput = prompt("Would you like me to plan a day trip for you? Yes or No?")

//if loop for day trip generator

if (userInput.toLowerCase() === "yes"){

//establish variables for element to be generated
    let destination = generateRandomElement(destinationArray);
    let transportation = generateRandomElement(transportationArray);
    let restaurant = generateRandomElement(restaurantArray);
    let entertainment = generateRandomElement(entertainmentArray);

//present the user with randomized itinerary
    console.log("Today you will be travelling to " + destination + ".");
    console.log("In order to get there, you will be travelling by " + transportation + ".");
    console.log("Once there you will be dining at " + restaurant +".");
    console.log("Following your meal, you will proceed to a " + entertainment + " for some entertainment.");

//prompt user for feedback on itinerary

    let userFeedback = prompt("Is there anything you would like me to change about this trip? Yes or No?");

//establish while loop for regenerating undesired elements
    while (userFeedback.toLowerCase() === "yes"){


        let itineraryCorrections = prompt("What about this trip would you like to change? Example: Entertainment, restaurant, transportation, destination");
        let destinationCorrection = "destination";
        let restaurantCorrection = "restaurant";
        let transportationCorrection = "transportation";
        let entertainmentCorrection = "entertainment";

// establish if/else for individual element input in user response

        if (itineraryCorrections.includes(destinationCorrection)){
            console.log("Your new destination is " + destination);}
        if (itineraryCorrections.includes(restaurantCorrection)){
            console.log("Your new restaurant is " + restaurant)}
        if (itineraryCorrections.includes(transportationCorrection)){
            console.log("Your new mode of transportation is " + transportation)}
        if (itineraryCorrections.includes(entertainmentCorrection)){
            console.log("Your new scheduled entertainment is " + entertainment)
        }

        
        //changes preompt text from first to second iteration
        userFeedback = prompt("Is there anything else you would like me to change? Yes or No?");
       

//provide conclusion of program
        
        
    }
console.log("Wonderful! Have a great time!");
            
        }
        
//provide response if user does not want to generate trip
    
else{
    console.log("Maybe another time! Goodbye!")
}


 
