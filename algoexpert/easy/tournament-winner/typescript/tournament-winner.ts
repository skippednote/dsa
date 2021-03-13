function tournamentWinner(
  competitions: [string, string][],
  results: number[]
): string {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  competitions.forEach(([homeTeam, awayTeam], index) => {
    let result = results[index];
    let winningTeam = result === 1 ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  });

  return currentBestTeam;
}

function updateScores(
  winningTeam: string,
  points: number,
  scores: { [key: string]: number }
) {
  if (winningTeam in scores) {
    scores[winningTeam] += points;
  } else {
    scores[winningTeam] = 0;
  }
}

const result = tournamentWinner(
  [
    ["HTML", "C#"],
    ["C#", "JavaScript"],
    ["JavaScript", "HTML"],
  ],
  [0, 0, 1]
);
console.log(result);
