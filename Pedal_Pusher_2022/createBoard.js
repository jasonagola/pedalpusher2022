var availableSquares = [
    ['Mystery Adventure', 'Perspective Shift <br> Clue Coming: 5/15'],
    ['100 Mile Challenge', 'Download the Strava App To Log Your Bike Miles!'],
    ['Fix it Up', 'Find 2 ERT Fix-It Stations'],
    ['Pup-arazzi', 'Snap a Picture With Your Furry Friend!'],
    ['Beer Run', 'Grab Your Favorite Smartmouth Six-Pick'],
    ['Taco Tuesday', 'Take a Ride For Tacos'],
    ['Mystery Adventure', 'Stop & Smell the Roses <br> Clue Coming: 5/22'],
    ['Safety First!', 'Show Off Your Helmet or Safety Gear'],
    ['Beer Run', 'Watermelon Mojito Kettle Sour | 5.5% ABV <br> Friday, 5/13'],
    ['Gravel Grinder', 'Take Your Bike Off-Road On a Dirt or Gravel Trail'],
    ['Cape Henry Trail', 'Spot The River While Riding Off-Road '],
    ['Local Bike Shop Love', 'High Five Your Local Bike Mechanic'],
    ['Beer Run', 'Pedal Pusher IPA'],
    ['Ridin\' High', 'Cross the Jordan Bridge in Norfolk'],
    ['Bike the Boardwalk', 'See the Sea'],
    ['Tour De Moonlight', 'Take a Night Ride'],
    ['Beer Run', 'Lord Sippycup IPA | 6.0% ABV <br> Friday, 5/13'],
    ['Local Art Hung', 'Photo Shoot With Your Bike and a Piece of Public Art'],
    ['Mystery Adventure', 'Super Commuter <br> Clue Coming: 5/15'],
    ['Grocery Getter', 'Ride to the Store'],
    ['Beer Run', 'PMA Peach Belgian Ale | 6.0% ABV <br> Friday, 5/6'],
    ['Keep it Casual', 'Join Local Bike Shop NFK For A Leisurely Ride'],
    ['Play Ball!', 'Bike to Harbor Park For a Tides Game'],
    ['Breakfast of Champions', 'Fuel up at Your Favorite Breakfast or Brunch Spot'],
    ['Mystery Adventure', 'Be a Bike Artist <br> Clue Coming: 5/8'],
]

function randomizeAvailableSquares() {
    let currentIndex = availableSquares.length, randomIndex;
    while (currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [availableSquares[currentIndex], availableSquares[randomIndex]] = [
            availableSquares[randomIndex], availableSquares[currentIndex]];
    }
    return availableSquares;
}
function insertInformation() {
    for (var i = 0; i<bingoSquaresArray.length; i++) {
        let title = availableSquares[i][0];
        let description = availableSquares[i][1];
        bingoSquaresArray[i].childNodes[1].innerHTML = title
        bingoSquaresArray[i].childNodes[2].innerHTML = description
    }
}

function createBoard() {
    randomizeAvailableSquares()
    insertInformation()
}

createBoard()