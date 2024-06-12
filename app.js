let bank = 100

let team1
let team2

let currentlyPlayingTeam1 = []
let currentlyPlayingTeam2 = []

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
        console.log(validPlayerPool[chosenPlayerIndex])
    }
    //fiters assigned players into their team array
    team1 = players.filter((player) => player.teamNumber == 1)
    team2 = players.filter((player) => player.teamNumber == 2)

    //sort each team array by the skill of players
    team1.sort((a, b) => b.skill - a.skill)
    console.log(team1)

    team2.sort((a, b) => b.skill - a.skill)
    console.log(team2)
}

function putPlayersOnField() {
    do {
        let nextOnBench = team1.shift()
        currentlyPlayingTeam1.push(nextOnBench)
    }
    while (currentlyPlayingTeam1.length < 5)

    do {
        let nextOnBench = team2.shift()
        currentlyPlayingTeam2.push(nextOnBench)
    }
    while (currentlyPlayingTeam2.length < 5)
}


function drawFullTeams() {
    let team1Html = ``
    console.log(team1)
    team1.forEach((player) => team1Html += `<div div class="d-flex flex-column align-items-center" > <span class="fs-1">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("full-team1-display").innerHTML = team1Html

    let team2Html = ``
    team2.forEach((player) => team2Html += `<div div class="d-flex flex-column align-items-center" > <span class="fs-1">${player.emoji}</span> ${player.name} <br> Skill: ${player.skill} <br> Risk: ${player.chanceOfInjury}</div>`)
    document.getElementById("full-team2-display").innerHTML = team2Html
}

createTeams()
drawFullTeams()
putPlayersOnField()

