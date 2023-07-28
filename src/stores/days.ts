import { isSameDay } from 'date-fns'
import { defineStore } from 'pinia'
import { useTournamentData } from '@/composables/useTournamentData';

type VisibileDay = {
  entry: IntersectionObserverEntry
  index: number
}

let loaded = false;

export const useDaysStore = defineStore('days', () => {
  const { tournament } = useTournamentData()
  const visibleDays = ref<VisibileDay[]>([])

  const observer = ref(new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const dataIndex = entry.target.getAttribute('data-index')
      const entryIndex = parseInt(dataIndex ?? '', 10)

      const index = visibleDays.value.findIndex(d => d.index === entryIndex)
      if (index >= 0) {
        visibleDays.value = [
          ...visibleDays.value.slice(0, index),
          { entry, index: entryIndex },
          ...visibleDays.value.slice(index + 1),
        ]
      } else {
        visibleDays.value = [
          ...visibleDays.value,
          { entry, index: entryIndex }
        ]
      }
    })
  }, { threshold: 0.7 }))

  const hasPrevious = computed(() => {
    return !visibleDays.value[0]?.entry.isIntersecting
  })

  const goToPrevious = () => {
    const firstVisible = [...visibleDays.value].findIndex(d => d.entry.isIntersecting)
    const previous = [...visibleDays.value][firstVisible - 1]
    if (previous) {
      previous.entry.target.scrollIntoView()
    }
  }

  const goToFirst = () => {
    if (hasPrevious.value) {
      visibleDays.value[0]?.entry.target.scrollIntoView()
    }
  }

  const hasNext = computed(() => {
    return !visibleDays.value[visibleDays.value.length - 1]?.entry.isIntersecting
  })

  const goToNext = () => {
    const lastVisible = [...visibleDays.value].reverse().findIndex(d => d.entry.isIntersecting)
    const next = [...visibleDays.value].reverse()[lastVisible - 1]
    if (next) {
      next.entry.target.scrollIntoView()
    }
  }

  const goToLast = () => {
    if (hasNext.value) {
      visibleDays.value[visibleDays.value.length - 1]?.entry.target.scrollIntoView()
    }
  }

  watchEffect(() => {
    if (tournament.value && visibleDays.value.length && !loaded) {
      const today = new Date()
      const todayIndex = tournament.value.days.findIndex(d => {
        return isSameDay(d.date, today)
      })
      if (todayIndex >= 0) {
        const todaysVisibile = visibleDays.value.find(d => d.index === todayIndex)
        todaysVisibile?.entry.target.scrollIntoView()
        loaded = true
      }
    }
  })

  return {
    visibleDays,
    observer,

    hasPrevious,
    goToPrevious,
    goToFirst,
    hasNext,
    goToNext,
    goToLast,
  }
})