import fs from 'fs'
import { MatchResult } from './MatchResults'
import { dateStringToDate } from './utils'

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
]

export class CsvFileReader {
  data: MatchData[] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(
        (match: string[]): MatchData => [
          dateStringToDate(match[0]),
          match[1],
          match[2],
          parseInt(match[3]),
          parseInt(match[4]),
          match[5] as MatchResult,
          match[6],
        ]
      )
  }
}
