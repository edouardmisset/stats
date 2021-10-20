import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((match: string): string[] => match.split(','))

// const homeWin = 'H'
// const awayWin = 'A'

let manUnitedWins = 0

matches.forEach((match: string[]): void => {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++
  }
})

console.log(`Man United won ${manUnitedWins} matches`)
