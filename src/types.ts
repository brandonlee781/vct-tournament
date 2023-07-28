export type Tournament = {
  days: TournamentDay[]
}
export type TournamentDay = {
  id: string
  date: Date
  matches: TournamentMatch[]
}
export type TournamentMatch = {
  id: string
  time: Date
  subtitle?: string
  teams?: Team[]
  placeholders?: Placeholder[]
}

export type TeamId = 'bilibili' | 'drx' | 'edward_gaming' | 'evil_geniuses' | 'fnatic' | 'fpx' | 'fut' | 'giants' | 'kru' | 'loud' | 'navi' | 'nrg' | 'paper_rex' | 't1' | 'team_liquid' | 'zeta_division'

export type Team = {
  id: TeamId
  name: string;
  league: 'EMEA' | 'Americas' | 'Pacific'
  region: string
  color: { primary: string; secondary: string; background?: string }
  icon?: { height?: string; width?: string }
}

export type TeamData = {
  name: string;
  league: 'EMEA' | 'Americas' | 'Pacific'
  region: string
  color: { primary: string; secondary: string; background?: string }
  icon?: { height?: string; width?: string }
}

export type Placeholder = {
  loser?: boolean
  winner?: boolean
  text: string
  subtext?: string
  link?: string;
}