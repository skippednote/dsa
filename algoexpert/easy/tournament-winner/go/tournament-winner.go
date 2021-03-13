package main

import "fmt"

func tournamentWinner(competitions [][]string, results []int) string {
	currentBestTeam := ""
	scores := map[string]int{currentBestTeam: 0}

	for i, competition := range competitions {
		result := results[i]
		homeTeam, awayTeam := competition[0], competition[1]

		winningTeam := awayTeam
		if result == 1 {
			winningTeam = homeTeam
		}
		updateScores(winningTeam, 3, scores)

		if scores[winningTeam] > scores[currentBestTeam] {
			currentBestTeam = winningTeam
		}
	}
	return currentBestTeam
}

func updateScores(team string, points int, scores map[string]int) {
	scores[team] += points
}

func main() {
	competitions := [][]string{{"HTML", "C#"}, {"C#", "Python"}, {"Python", "HTML"}}
	results := []int{0, 0, 1}
	r := tournamentWinner(competitions, results)
	fmt.Println(r)

}
