import type { TeamId } from '@/types'
import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', () => {
  const highlightedTeam = ref<TeamId | null>()

  return { highlightedTeam }
})
