import teamData from '@/team-data'
import { supabase } from '@/api'
import type { Placeholder, Team, TeamId, Tournament, TournamentMatch } from '@/types'
import { useQuery } from '@tanstack/vue-query'

type DbTournamentDay = {
  id: string
  date: string
  special: boolean
  special_color?: string
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
      special_color,
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
        specialColor: day.special_color,
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