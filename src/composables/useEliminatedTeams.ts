import { supabase } from '@/api';
import type { TeamId } from '@/types';
import { useQuery } from '@tanstack/vue-query';

async function getElinatedTeams() {
  const { data, error } = await supabase
    .from('eliminated_teams')
    .select<string, { id: string; team_id: TeamId; }>()

  if (error) {
    throw new Error(error.message)
  }

  return data.map(d => d.team_id)
}
export function useEliminatedTeams() {
  const { data } = useQuery(['eliminatedTeams'], () => getElinatedTeams())

  return {
    teams: data
  }
}