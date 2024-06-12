let bank = 100

let team1
let team2

let currentlyPlayingTeam1 = []
let currentlyPlayingTeam2 = []

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: "🏃‍♂️",
        skill: 10,
        chanceOfInjury: 22
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: "🤾‍♂️",
        skill: 30,
        chanceOfInjury: 18
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: "🏇",
        skill: 88,
        chanceOfInjury: 15
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
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
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: "🏌️‍♂️",
        skill: 21,
        chanceOfInjury: 5
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: "🤾",
        skill: 5,
        chanceOfInjury: 27
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: "🏂",
        skill: 99,
        chanceOfInjury: 8
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: "🧘‍♀️",
        skill: 50,
        chanceOfInjury: 38
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: "🚶‍♀️",
        skill: 1,
        chanceOfInjury: 12
    },
    {
        name: "Saggitariutt Jefferspin",
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
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: "🏄",
        skill: 71,
        chanceOfInjury: 5
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: "🧜‍♂️",
        skill: 76,
        chanceOfInjury: 26
    },
    {
        name: "Scoish Velociraptor Maloish",
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
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: "🕴️",
        skill: 58,
        chanceOfInjury: 32
    },
    {
        name: "Firstname Lastname",
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
        name: "Shakiraquan T.G.I.F. Carter",
        teamNumber: 0,
        emoji: "🧗‍♂️",
        skill: 90,
        chanceOfInjury: 23
    },
    {
        name: "Swirvithan L'Goodling-Splatt",
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
        name: "Fartrell Cluggins",
        teamNumber: 0,
        emoji: "🤸‍♂️",
        skill: 85,
        chanceOfInjury: 30
    },
    {
        name: "Blyrone Blashinton",
        teamNumber: 0,
        emoji: "🏌️",
        skill: 60,
        chanceOfInjury: 24
    },
    {
        name: "Cartoons Plural",
        teamNumber: 0,
        emoji: "🏋️",
        skill: 78,
        chanceOfInjury: 11
    },
    {
        name: "Jammie Jammie-Jammie",
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
        name: "Equine Ducklings",
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
    console.log(`Bench: ${team1}`)
    console.log(`On Field: ${currentlyPlayingTeam1}`)

    do {
        let nextOnBench = team2.shift()
        //ask about the push error
        currentlyPlayingTeam2.push(nextOnBench)
    }
    while (currentlyPlayingTeam2.length < 5)
    console.log(`Bench: ${team2}`)
    console.log(`On Field: ${currentlyPlayingTeam2}`)

}

