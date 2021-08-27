// Establish the arrays with elements that will eventually populate the random day trip 

let transportationArray = ['Bus', 'Plane', 'Helicopter', 'Car', 'Limousine', 'Horse', 'Dunebug', 'Hot air Balloon', 'Pack mule'];
let restaurantArray = ['Pascolo Ristorante (Italian)', 'Bubbas Smokehouse (BBQ)', 'Feng Yua Kitchen (Chinese)', 'King of the Roll (Sushi)', 'Cafe Elouise (French)', 'Tio Gordo (Mexican)'];
let destinationArray = ['Portland, ME', 'Providence, RI', 'Boston, MA', 'Las Vegas, NV', 'Tampa Bay, FL', 'Salt Lake City, UT', 'Denver, CO', 'Houston, TX', 'Yuma, AZ'];
let entertainmentArray = ['Movie', 'Play', 'Horse Race', 'Casino', 'State Fair', 'Concert', 'Ballet', 'Opera', 'Monster Car Rally'];


//create funtion that generates random elements of arrays

function generateRandomElement(someArray){
    return someArray[Math.floor(Math.random() * someArray.length)];
   
}

//allow for program to initialize with user input


let userInput = prompt("Would you like me to plan a day trip for you? Yes or No?")

//provide response for both yes and no answers, yes continues the program to day trip generation

if (userInput.toLowerCase() === "yes"){

//establish variables for values of each array being plugged into randomizing function
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

//while loop continues to adjust selected elements of itinerary until user response to prompt is anything other than yes, in this case, no.
    while (userFeedback.toLowerCase() === "yes"){


        let itineraryCorrections = prompt("What about this trip would you like to change? Example: Entertainment, restaurant, transportation, destination");
        let destinationCorrection = "destination";
        let restaurantCorrection = "restaurant";
        let transportationCorrection = "transportation";
        let entertainmentCorrection = "entertainment";

// allows for any one or more elements to be re-randomized and output to user

        if (itineraryCorrections.includes(destinationCorrection)){
            console.log("Your new destination is " + destination);}
        if (itineraryCorrections.includes(restaurantCorrection)){
            console.log("Your new restaurant is " + restaurant)}
        if (itineraryCorrections.includes(transportationCorrection)){
            console.log("Your new mode of transportation is " + transportation)}
        if (itineraryCorrections.includes(entertainmentCorrection)){
            console.log("Your new scheduled entertainment is " + entertainment)
        }

        
        //changes prompt from first instance to second iteration
        userFeedback2 = prompt("Is there anything else you would like me to change? Yes or No?");
        userFeedback = userFeedback2

//provides conclusion once user is satisfied with itinerary
        
        console.log("Wonderful! Have a great time!");
    }

            
        }
        
//provides response in case user does not want to generate itinerary in the first place
    
else{
    console.log("Maybe another time! Goodbye!")
}


 