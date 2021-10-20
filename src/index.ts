import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')
reader.read()

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0

reader.data.forEach((match: string[]): void => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
})

console.log(`Man United won ${manUnitedWins} matches`)
