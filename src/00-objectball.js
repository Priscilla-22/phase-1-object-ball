// Part 1: Building the Object
function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
console.log(gameObject());

//Function Building
function numPointsScored(playersName) {
  const gameArray = gameObject();
  const awayPlayer = gameArray.home.players[playersName];
  const homePlayer=gameArray.away.players[playersName];
  
    if (homePlayer && homePlayer.points) {
      return homePlayer.points;
    } else if (awayPlayer && awayPlayer.points) {
      return awayPlayer.points;
    } else {
      return 'Player is not listed';
    }
}
const playersName = 'Ben Gordon';
const scoredPoints = numPointsScored(playersName);
console.log(`${playersName} scored: ${scoredPoints} points`);

//takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
  const gameArray = gameObject();
  const homePlayer = gameArray.away.players[playerName];
  const awayPlayer = gameArray.home.players[playerName];

  if (homePlayer && homePlayer.shoe) {
    return homePlayer.shoe;
  } else if (awayPlayer && awayPlayer.shoe) {
    return awayPlayer.shoe;
  } else {
    return 'Player is not listed';
  }
}
const playerName = 'Brendan Haywood';
const playerShoeSize = shoeSize(playerName);
console.log(`${playerName} shoe size is:  ${playerShoeSize}`);

//takes in an argument and returns an array of that teams colors.
function teamColors(teamName) {
  const gameArray = gameObject();
  const homeTeam = gameArray.home;
  const awayTeam = gameArray.away;

  if (homeTeam.teamName === teamName) {
    return homeTeam.colors;
  } else if (awayTeam.teamName === teamName) {
    return awayTeam.colors;
  } else {
    return 'Team not listed'
  }
}
const groupColors = teamColors('Charlotte Hornets')
console.log(groupColors);

//operates on the game object to return an array of the team names.
function teamNames() {
  const gameArray = gameObject();

  const homeTeam = gameArray.home.teamName;
  const awayTeam = gameArray.away.teamName;

return [homeTeam, awayTeam]
}
const namesOfTeam = teamNames();
console.log(namesOfTeam);