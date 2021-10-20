import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv')
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United')

matchReader.load()
htmlSummary.buildAndPrintReport(matchReader.matches)
