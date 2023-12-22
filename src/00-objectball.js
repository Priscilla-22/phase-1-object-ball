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
  const homePlayer = gameArray.away.players[playersName];

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
    return 'Team not listed';
  }
}
const groupColors = teamColors('Charlotte Hornets');
console.log(groupColors);

//operates on the game object to return an array of the team names.
function teamNames() {
  const gameArray = gameObject();

  const homeTeam = gameArray.home.teamName;
  const awayTeam = gameArray.away.teamName;

  return [homeTeam, awayTeam];
}
const namesOfTeam = teamNames();
console.log(namesOfTeam);

//returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
  const gameArray = gameObject();

  const homeTeam = gameArray.home.players;
  const awayTeam = gameArray.away.players;

  const homeJerseyNumbers = Object.values(homeTeam).map(
    (player) => player.number
  );
  const awayJerseyNumbers = Object.values(awayTeam).map(
    (player) => player.number
  );

  return [homeJerseyNumbers, awayJerseyNumbers];
}
const JerseyNumbers = playerNumbers('Charlotte Hornets');
console.log(JerseyNumbers);

//
function playerStats(playerStatsName) {
  const gameArray = gameObject();

  const homePlayer = gameArray.home.players[playerName];
  const awayPlayer = gameArray.away.players[playerName];

  if (homePlayer) {
    return homePlayer;
  } else if (awayPlayer) {
    return awayPlayer;
  } else {
    return null;
  }
}

const playerStatsName = 'Charlotte Hornets';
const playerStatsResult = playerStats(playerStatsName);
console.log(playerStatsResult);

//returns the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds() {
  const game = gameObject();
  const allPlayers = [
    ...Object.values(gameObj.home.players),
    ...Object.values(gameObj.away.players),
  ];

  const playerWithLargestShoeSize = allPlayers.reduce(
    (maxPlayer, currentPlayer) => {
      return currentPlayer.shoe > maxPlayer.shoe ? currentPlayer : maxPlayer;
    },
    { shoe: 0 }
  );

  return playerWithLargestShoeSize.rebounds;
}

const result = bigShoeRebounds();
console.log(result);

//player with the most points
function mostPointsScored() {
  const gameArray= gameObject();
  const allPlayers = [
    ...Object.values(gameArray.home.players),
    ...Object.values(gameArray.away.players),
  ];

  let playerWithMostPoints = allPlayers.reduce(
    (maxPlayer, currentPlayer) => {
      return currentPlayer.points > maxPlayer.points
        ? currentPlayer
        : maxPlayer;
    },
    { points: 0 }
  );

  return playerWithMostPoints.points;
}

const results = mostPointsScored();
console.log(results);

//team has the most points
function winningTeam() {
  const gameArray = gameObject();
  const homePlayers = Object.values(gameArray.home.players);
  const awayPlayers = Object.values(gameArray.away.players);

  const homePoints = homePlayers.reduce(
    (total, player) => total + player.points,
    0
  );
  const awayPoints = awayPlayers.reduce(
    (total, player) => total + player.points,
    0
  );

  return homePoints > awayPoints
    ? gameArray.home.teamName
    : gameArray.away.teamName;
}

const teamWin = winningTeam();
console.log(teamWin);

//player has the longest name
function playerWithLongestName() {
    const gameData = gameObject();

    const allPlayerNames = [
        ...Object.keys(gameData.home.players),
        ...Object.keys(gameData.away.players)
    ];

    const playerWithLongestName = allPlayerNames.find(
        (playerName) => playerName.length === Math.max(...allPlayerNames.map((name) => name.length))
    );

    return playerWithLongestName;
}

console.log(playerWithLongestName());


// Function to check if the player with the longest name also had the most steals
function doesLongNameStealATon() {
    const gameData = gameObject();
    const allPlayers = [
        ...Object.values(gameData.home.players),
        ...Object.values(gameData.away.players)
    ];

    const playerWithMostSteals = allPlayers.reduce((max, player) =>
        player.steals > max.steals ? player : max
    );

    const playerWithLongestNameResult = playerWithLongestName();
    return playerWithLongestNameResult.number === playerWithMostSteals.number;
}

console.log(doesLongNameStealATon());