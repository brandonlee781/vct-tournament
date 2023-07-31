export type Tournament = {
  days: TournamentDay[]
}
export type TournamentDay = {
  id: number
  day: number
  date: Date
  endDate?: Date
  special: boolean
  specialColor?: { bg?: string; text?: string, dark?: boolean }
  matches: TournamentMatch[]
}
export type TournamentMatch = {
  id: string
  time: Date
  subtitle?: string
  teams?: Team[]
  placeholders?: Placeholder[]
}

export type TeamId = '100_thieves' | 'bilibili' | 'cloud9' | 'drx' | 'edward_gaming' | 'evil_geniuses' | 'fnatic' | 'fpx' | 'fut' | 'giants' | 'kru' | 'loud' | 'navi' | 'nrg' | 'paper_rex' | 'sentinels' | 't1' | 'team_liquid' | 'zeta_division'

export type TeamData = {
  name: string;
  league: 'EMEA' | 'Americas' | 'Pacific' | 'China'
  region: string
  color: { primary: string; secondary?: string; background?: string }
  icon?: { height?: string; width?: string }
}

export type Team = TeamData & { id: TeamId }

export type Placeholder = {
  loser?: boolean
  winner?: boolean
  text: string
  subtext?: string
  link?: string;
}