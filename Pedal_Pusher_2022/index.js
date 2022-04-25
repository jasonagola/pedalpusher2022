var count = 0

//Imagining Some backend save state that can be reloaded??
var completionStatus = {
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false,
    box10: false,
    box11: false,
    box12: false,
    box13: false,
    box14: false,
    box15: false,
    box16: false,
    box17: false,
    box18: false,
    box19: false,
    box20: false,
    box21: false,
    box22: false,
    box23: false,
    box24: false,
    box25: false
};

var navBarArray = {
    howToPlay: false, 
    resources: false, 
    markUpBoard: true
};

const bingoWinsArray = [
    [box1, box2, box3, box4, box5],
    [box6, box7, box8, box9, box10],
    [box11, box12, box13, box14, box15],
    [box16, box17, box18, box19, box20],
    [box21, box22, box23, box24, box25],
    [box1, box6, box11, box16, box21],
    [box2, box7, box12, box17, box22],
    [box3, box8, box13, box18, box23],
    [box4, box9, box14, box19, box24],
    [box5, box10, box15, box20, box25],
    [box1, box7, box13, box19, box25],
    [box5, box9, box13, box17, box21]
]

function toggleCheckMark(completionStatusCheck, bingoSquareId) {
    boxToCheckMark = document.getElementById(bingoSquareId)
    // console.log(boxToCheckMark)
    completionStatusCheck ? boxToCheckMark.classList.remove('boxChecked'):boxToCheckMark.classList.add('boxChecked')
}
//Change Completion Status of Square when 'Check Off Completed Challenges" is Selected.  Should be cleaned up.  Save State prep/localstorage/backend eventually??
const changeCompletionStatus = (bingoSquareId) => {
    // console.log("Changing" + bingoSquareId)
    let completionStatusCheck = completionStatus[bingoSquareId] 
    // console.log(completionStatus[bingoSquareId])
    completionStatusCheck === false ? completionStatus[bingoSquareId] = true: completionStatus[bingoSquareId] = false;    
    // console.log(completionStatus[bingoSquareId])
    completionStatusCheck === true ? count -=1 : count += 1
    document.getElementById('count').innerHTML = count
    toggleCheckMark(completionStatusCheck, bingoSquareId);
    if (checkForBingo()) {
        console.log("Winner")
        document.getElementById('announce-Bingo').classList.add('announce-Bingo.show')
    }
    }

//Grab additional info from info array/
const displaySquareInfo = () => {

}

//Change Class of Board for appropriate hover clicker
function changeBoardClass() {

}

//Nav Selector Distributor: Get Clicked box ID and Check Nav Selector for appropriate functionality 
function getBingoSquareID(e) {
    var bingoSquareId = e.target.id
    // console.log(bingoSquareId)
    if (navBarArray['howToPlay']) {
        displaySquareInfo(bingoSquareId)
    }
    else if (navBarArray['resource']) {
    }
    else if (navBarArray['markUpBoard']) {
        changeCompletionStatus(bingoSquareId);
    }
}

// Create Array of Bingo Squares and Assign click EventListener to each, pass of to Nav selector distributor
function bingoSquaresEventListener() {
    var bingoSquares = Array.from(document.querySelectorAll('.box'));
        for (var i = 0; i<bingoSquares.length; i++) {
            bingoSquares[i].addEventListener('click', getBingoSquareID)
        }
    }

//Nav Bar Selector
function toggleNavBar(target) {
    var navBarItems = document.getElementById('navBar').children;
    for (var i = 0; i < navBarItems.length; i++) {
        navBarItems[i].className = "navBarUnselected";
    }
    target.className = 'navBarSelected'
    for (nav in navBarArray) {
        navBarArray[nav] = false;
    }
    navBarArray[target.id] = true
}

//Check For Bingo Wins
function checkForBingo() {
    return bingoWinsArray.some(bingo => {
        return bingo.every(id => {
            return id.classList.contains('boxChecked')
        })
    })
}

bingoSquaresEventListener()
