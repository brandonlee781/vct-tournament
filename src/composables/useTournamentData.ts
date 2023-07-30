import teamData from '@/team-data'
import { supabase } from '@/api'
import type { Placeholder, Team, TeamId, Tournament } from '@/types'
import { useQuery } from '@tanstack/vue-query'

type DbTournamentDay = {
  id: number
  date: string
  special: boolean
  special_bg?: string
  special_dark?: boolean
  matches: {
    id: string;
    time: string;
    subtitle?: string
    teams?: { id: TeamId }[]
    placeholders?: Placeholder[]
  }[]
}

const getTeamData = ({id }: { id: TeamId }): Team => ({
  id,
  ...teamData[id],
})

async function getTournamentData(): Promise<Tournament> {
  const { data, error } = await supabase
    .from('days')
    .select<string, DbTournamentDay[]>(`
      id,
      date,
      special,
      special_bg,
      special_dark,
      matches:matches(
        id,
        time,
        subtitle,
        teams,
        placeholders
      )
    `)
    .order('date', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return {
    days: data?.reduce((a, b) => a.concat(b), []).map(day => {
      return {
        ...day,
        specialColor: {
          bg: day.special_bg,
          text: day.special_dark ? '#FFF' : '#000',
          dark: day.special_dark,
        },
        date: new Date(`${day.date}T12:00:00+00:00`),
        matches: day.matches.map(match => {
          return {
            id: match.id,
            subtitle: match.subtitle ?? '',
            time: new Date(match.time),
            teams: match.teams?.map(t => getTeamData(t)) ?? [],
            placeholders: match.placeholders ?? [],
          }
        }).sort((a, b) => {
          return a.time.getTime() - b.time.getTime()
        })
      }
    })
  }
}

export function useTournamentData() {
  const { data } = useQuery(['tournament'], getTournamentData)
  return {
    tournament: data
  }
}