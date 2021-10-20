import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResults'

// Create an object that satisfies 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0

matchReader.matches.forEach((match): void => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
})

console.log(`Man United won ${manUnitedWins} matches`)
