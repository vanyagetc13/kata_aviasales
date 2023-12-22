import { useMemo } from 'react'

const useFilteredList = (list, appliedFilters) => {
	const filteredList = useMemo(() => {
		const allFilter = appliedFilters.find((filter) => filter.key === 'All')
		if (allFilter) return list
		const filters = appliedFilters.map((filter) => Number(filter.key))
		if (!filters.length) return []
		return list.filter((ticket) =>
			filters.includes(ticket.segments.reduce((acc, curr) => acc + curr.stops.length, 0))
		)
	}, [list, appliedFilters])
	return filteredList
}
const useFilteredAndSortedList = (list, appliedFilters, sort) => {
	const filtered = useFilteredList(list, appliedFilters)
	const filteredAndSortedList = useMemo(() => {
		if (sort === 'cheap') return [...filtered].sort((a, b) => a.price - b.price)
		if (sort === 'fast')
			return [...filtered].sort(
				(a, b) =>
					a.segments.reduce((acc, curr) => acc + curr.duration, 0) -
					b.segments.reduce((acc, curr) => acc + curr.duration, 0)
			)
		if (sort === 'optimal') return filtered
		return filtered
	}, [filtered, sort])
	return filteredAndSortedList
}
const useLengthedList = (list, length) => {
	if (!length) return list
	const lenghtedList = useMemo(() => [...list].slice(0, length), [list, length])
	return lenghtedList
}

const useList = (list, appliedFilters, sort, length) => {
	const filteredSorted = useFilteredAndSortedList(list, appliedFilters, sort)
	const filteredSortedLenghtedList = useLengthedList(filteredSorted, length)
	return filteredSortedLenghtedList
}

export default useList
