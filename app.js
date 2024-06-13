
// TODO eventlog need to load into text to go in to div with id eventlog for each action b a player

let bank = 100

let team1
let team2

let currentlyPlayingTeam1 = []
let currentlyPlayingTeam2 = []

let quarter = 1
let round = 1

let team1Score = 0

let team2Score = 0

let eventLogText = ``

let balance = 500

let team1Bet = 0

let team2Bet = 0

document.getElementById("midgame-display").style.display = 'none'

const players =
    [
        {
            name: "D'Marcus Will",
            teamNumber: 0,
            emoji: "🏃‍♂️",
            skill: 10,
            chanceOfInjury: 22
        },
        {
            name: "Tyroil Smooch",
            teamNumber: 0,
            emoji: "🤾‍♂️",
            skill: 30,
            chanceOfInjury: 18
        },
        {
            name: "Jack Tackthera",
            teamNumber: 0,
            emoji: "🏇",
            skill: 88,
            chanceOfInjury: 15
        },
        {
            name: "Javaris Lamar",
            teamNumber: 0,
            emoji: "🏌️‍♀️",
            skill: 15,
            chanceOfInjury: 11
        },
        {
            name: "D'Pez Poopsie",
            teamNumber: 0,
            emoji: "🏋️‍♂️",
            skill: 77,
            chanceOfInjury: 24
        },
        {
            name: "D'Jasper Prob",
            teamNumber: 0,
            emoji: "🏌️‍♂️",
            skill: 21,
            chanceOfInjury: 5
        },
        {
            name: "Leoz Jilliumz",
            teamNumber: 0,
            emoji: "🤾",
            skill: 5,
            chanceOfInjury: 27
        },
        {
            name: "Hingle McCrin",
            teamNumber: 0,
            emoji: "🏂",
            skill: 99,
            chanceOfInjury: 8
        },
        {
            name: "L'Carpetron D",
            teamNumber: 0,
            emoji: "🧘‍♀️",
            skill: 50,
            chanceOfInjury: 38
        },
        {
            name: "Xmus Jaxon Fl",
            teamNumber: 0,
            emoji: "🚶‍♀️",
            skill: 1,
            chanceOfInjury: 12
        },
        {
            name: "Sag Jefferspin",
            teamNumber: 0,
            emoji: "🏋️‍♀️",
            skill: 61,
            chanceOfInjury: 21
        },
        {
            name: "Quatro Quatro",
            teamNumber: 0,
            emoji: "🤺",
            skill: 34,
            chanceOfInjury: 29
        },
        {
            name: "X-Wing @Alic",
            teamNumber: 0,
            emoji: "🏄",
            skill: 71,
            chanceOfInjury: 5
        },
        {
            name: "Bisquiteen Tr",
            teamNumber: 0,
            emoji: "🧜‍♂️",
            skill: 76,
            chanceOfInjury: 26
        },
        {
            name: "Scoish Maloish",
            teamNumber: 0,
            emoji: "🤸",
            skill: 47,
            chanceOfInjury: 7
        },
        {
            name: "Donkey Teeth",
            teamNumber: 0,
            emoji: "⛹️‍♀️",
            skill: 23,
            chanceOfInjury: 20
        },
        {
            name: "T.J. A.J. R.J.",
            teamNumber: 0,
            emoji: "🕴️",
            skill: 58,
            chanceOfInjury: 32
        },
        {
            name: "Firstname Lst",
            teamNumber: 0,
            emoji: "💃",
            skill: 99,
            chanceOfInjury: 14
        },
        {
            name: "Dan Smith",
            teamNumber: 0,
            emoji: "🧍‍♂️",
            skill: 3,
            chanceOfInjury: 13
        },
        {
            name: "Tiger",
            teamNumber: 0,
            emoji: "🐅",
            skill: 100,
            chanceOfInjury: 2
        },
        {
            name: "Shakiraquan C",
            teamNumber: 0,
            emoji: "🧗‍♂️",
            skill: 90,
            chanceOfInjury: 23
        },
        {
            name: "Swirvithan L",
            teamNumber: 0,
            emoji: "🏇",
            skill: 45,
            chanceOfInjury: 15
        },
        {
            name: "Grunky Peep",
            teamNumber: 0,
            emoji: "🏃‍♀️",
            skill: 52,
            chanceOfInjury: 17
        },
        {
            name: "Fartrell Clug",
            teamNumber: 0,
            emoji: "🤸‍♂️",
            skill: 85,
            chanceOfInjury: 30
        },
        {
            name: "Blyrone Blash",
            teamNumber: 0,
            emoji: "🏌️",
            skill: 60,
            chanceOfInjury: 24
        },
        {
            name: "Cartoons Plur",
            teamNumber: 0,
            emoji: "🏋️",
            skill: 78,
            chanceOfInjury: 11
        },
        {
            name: "Jammie Jammie",
            teamNumber: 0,
            emoji: "🏄‍♂️",
            skill: 12,
            chanceOfInjury: 22
        },
        {
            name: "Fudge",
            teamNumber: 0,
            emoji: "🍫",
            skill: 38,
            chanceOfInjury: 31
        },
        {
            name: "Equine Ducks",
            teamNumber: 0,
            emoji: "🦆",
            skill: 69,
            chanceOfInjury: 19
        },
        {
            name: "Squeemy",
            teamNumber: 0,
            emoji: "🤼",
            skill: 56,
            chanceOfInjury: 18
        }
    ]


function createTeams() {
    //assigns team numbers to players
    for (let i = 0; i < 20; i++) {
        let validPlayerPool = players.filter((player) => player.teamNumber == 0)
        let chosenPlayerIndex = Math.floor(Math.random() * validPlayerPool.length)
        validPlayerPool[chosenPlayerIndex].teamNumber = ((i % 2) + 1)
    }
    //fiters assigned players into their team array
    team1 = players.filter((player) => player.teamNumber == 1)
    team2 = players.filter((player) => player.teamNumber == 2)

    //sort each team array by the skill of players
    team1.sort((a, b) => b.skill - a.skill)

    team2.sort((a, b) => b.skill - a.skill)

}

function putPlayersOnField() {
    do {
        let nextOnBench = team1.shift()
        currentlyPlayingTeam1.push(nextOnBench)
    }
    while (currentlyPlayingTeam1.length < 5)
    console.log(`team1 playing: `, currentlyPlayingTeam1)
    console.log(`team1 bench: `, team1)

    do {
        let nextOnBench = team2.shift()
        currentlyPlayingTeam2.push(nextOnBench)
    }
    while (currentlyPlayingTeam2.length < 5)
    console.log(`team2 playing: `, currentlyPlayingTeam2)
    console.log(`team2 bench: `, team2)
}

function drawFullTeams() {
    let team1Html = ``
    team1.forEach((player) => team1Html += `<div div class="d-flex flex-column align-items-center" > <span class="fs-1">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("full-team1-display").innerHTML = team1Html

    let team2Html = ``
    team2.forEach((player) => team2Html += `<div div class="d-flex flex-column align-items-center" > <span class="fs-1">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("full-team2-display").innerHTML = team2Html
}

function startQuarter() {
    document.getElementById("pregame-display").style.display = 'none'
    document.getElementById("midgame-display").style.display = 'block'
    document.getElementById("site-header").style.display = 'none'
    let delay = setTimeout(() => { console.log('waiting'); }, 10000);

    var i = 0;
    document.getElementById("start-quarter-button").style.display = "none"

    function timedLoop() {
        setTimeout(function () {
            document.getElementById("start-quarter-button").style.display = "none"
            if (i % 2) {
                team2Score = calculatePlay(currentlyPlayingTeam2, team2, team2Score)
            }
            else {
                team1Score = calculatePlay(currentlyPlayingTeam1, team1, team1Score)
            }
            drawPlayingTeams()
            document.getElementById("event-log").innerHTML = eventLogText
            if (i % 2) {
                eventLogText = `<span class="text-danger">${eventLogText}</span>`
            }
            else {
                eventLogText = `<span class="text-primary">${eventLogText}</span>`
            }
            if (i < 7) {

                document.getElementById("event-log").innerHTML = eventLogText
                eventLogText = ''
            }
            else {
                eventLogText += " [End of quarter]"
                document.getElementById("event-log").innerHTML = eventLogText
                if (quarter != 4) {
                    document.getElementById("start-quarter-button").style.display = "block"
                }

                eventLogText = ''

            }
            i++;
            if (i == 8) {

                console.log(`quarterfinished`)
                if (quarter == 4) {
                    console.log('game finished')
                    endGame()
                    quarter = 1
                }
                else {
                    console.log('jobs not done')
                    quarter++
                }

            }
            if (i < 8) {
                timedLoop();
            }
        }, 1000)
    }
    timedLoop()
}

function calculatePoints(player) {
    let baseShot = Math.random() * 100
    if (baseShot + player.skill > 155) {
        eventLogText += `Player: ${player.name} ${player.emoji} has scored 3 points`
        return (3)
    }
    else if (baseShot + player.skill > 90) {
        eventLogText += `Player: ${player.name} ${player.emoji} has scored 2 points`
        return (2)
    }
    else {
        eventLogText += `Player: ${player.name} ${player.emoji} has missed their shot`
        return 0
    }
}

function calculateInjury(player) {
    let baseInjury = (Math.random() * 100)
    if (baseInjury + player.chanceOfInjury > 95) {
        eventLogText += ` unfortunatly they got injured and are on the bench`
        return (true)
    }
    else {
        return (false)
    }
}

function calculatePlay(teamCurrent, teamBench, teamScore) {
    let playerIndex = Math.floor(Math.random() * 5)
    let player = teamCurrent[playerIndex]
    console.log(`player #`, playerIndex, ` `, player.name, `has the ball`)
    teamScore += calculatePoints(player)
    console.log(`Points: ${teamScore}`)
    if (calculateInjury(player)) {
        console.log(`INJURY: ${player.name}`)
        const injuredPlayer = teamCurrent.splice(playerIndex, 1)[0]
        let nextOnBench = teamBench.shift()
        teamCurrent.push(nextOnBench)
        teamBench.push(injuredPlayer)
        console.log(`new playing`, teamCurrent)
        console.log(`new bench:`, teamBench)
    }
    return (teamScore)
}

function drawPlayingTeams() {
    let team1HtmlField = ``
    currentlyPlayingTeam1.forEach((player) => team1HtmlField += `<div div class="d-flex flex-column align-items-center" > <span class="fs-2">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("playing-team1-display").innerHTML = team1HtmlField

    let team1HtmlBench = ``
    team1.forEach((player) => team1HtmlBench += `<div div class="d-flex flex-column align-items-center" > <span class="fs-3">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("bench-team1-display").innerHTML = team1HtmlBench

    let team2HtmlField = ``
    currentlyPlayingTeam2.forEach((player) => team2HtmlField += `<div div class="d-flex flex-column align-items-center" > <span class="fs-2">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("playing-team2-display").innerHTML = team2HtmlField

    let team2HtmlBench = ``
    team2.forEach((player) => team2HtmlBench += `<div div class="d-flex flex-column align-items-center" > <span class="fs-3">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("bench-team2-display").innerHTML = team2HtmlBench

    document.getElementById('team1-score').innerText = String(team1Score)
    document.getElementById('team2-score').innerText = String(team2Score)
}

function betTeam1(amount) {
    if (amount < 0) {
        amount = balance
    }
    if (amount <= balance) {
        balance -= amount
        team1Bet += amount
    }
    else {
        alert("Insufficent balance. Please deposit")
    }
    drawBalance()
}

function betTeam2(amount) {
    if (amount < 0) {
        amount = balance
    }
    if (amount <= balance) {
        balance -= amount
        team2Bet += amount
    }
    else {
        alert("Insufficent balance. Please deposit")
    }
    drawBalance()
}

function drawBalance() {
    document.getElementById("balanceSpan").innerText = `${balance.toFixed(2)}`
}

function endGame() {
    if (team1Score > team2Score && team1Bet > 0) {
        alert(`Team 1 Wins! you have been awarded $${team1Bet * 2}`)
        balance += team1Bet * 2
    }
    else if (team2Score > team1Score && team2Bet > 0) {
        alert(`Team 2 Wins! you have been awarded $${team2Bet * 2}`)
        balance += team2Bet * 2
    }
    else if (team1Score == team2Score) {
        alert(`nobody wins :( `)
        balance += team1Bet + team2Bet
    }
    else {
        alert('you lose')
    }
    drawBalance()
    currentlyPlayingTeam1 = []
    currentlyPlayingTeam2 = []
    players.forEach((player) => player.teamNumber = 0)
    createTeams()
    drawFullTeams()
    putPlayersOnField()
    team1Score = 0
    team2Score = 0
    team1Bet = 0
    team2Bet = 0
    document.getElementById("midgame-display").style.display = 'none'
    document.getElementById("pregame-display").style.display = 'block'
    document.getElementById("site-header").style.display = 'block'

}

createTeams()
drawFullTeams()
putPlayersOnField()
//calculatePlay(currentlyPlayingTeam1, team1, 0)
drawPlayingTeams()
drawBalance()


