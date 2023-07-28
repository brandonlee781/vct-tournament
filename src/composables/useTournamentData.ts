import teamData from '@/team-data.json'
import { supabase } from '@/api'
import type { TournamentDay } from '@/types'
import { useQuery } from '@tanstack/vue-query'

async function getTournamentData() {
  const { data, error } = await supabase
    .from('days')
    .select<string, TournamentDay[]>(`
      id,
      date,
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
        date: new Date(`${day.date}T12:00:00+00:00`),
        matches: day.matches.map(match => {
          if (match.teams?.length) {
            return {
              ...match,
              time: new Date(match.time),
              teams: match.teams.map(team => {
                return {
                  ...team,
                  ...teamData[team.id],
                }
              })
            }
          }
          return {
            ...match,
            time: new Date(match.time)
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