import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResults'
import { Analyzer } from '../Summary'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0
    matches.forEach((match): void => {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++
      }
    })
    return `${this.team} won ${wins} games`
  }
}
