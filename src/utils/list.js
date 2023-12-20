const getFilteredList = (list, appliedFilters) => {
	const allFilter = appliedFilters.find((filter) => filter.key === 'All')
	if (allFilter) return list
	const filters = appliedFilters.map((filter) => Number(filter.key))
	if (!filters.length) return []
	return list.filter((ticket) => filters.includes(ticket.segments.reduce((acc, curr) => acc + curr.stops.length, 0)))
}
const getFilteredAndSortedList = (list, appliedFilters, sort) => {
	const filtered = getFilteredList(list, appliedFilters)
	if (sort === 'cheap') return [...filtered].sort((a, b) => a.price - b.price) // Сортировка: дешевле
	if (sort === 'fast')
		return [...filtered].sort(
			(a, b) =>
				a.segments.reduce((acc, curr) => acc + curr.duration, 0) -
				b.segments.reduce((acc, curr) => acc + curr.duration, 0)
		) // Сортировка: быстрее
	if (sort === 'optimal') return filtered
	return filtered
}
const getLenghtedList = (list, length) => {
	return [...list].slice(0, length)
}

const getFilteredSortedLenghtedList = (list, appliedFilters, sort, length) => {
	const filteredSorted = getFilteredAndSortedList(list, appliedFilters, sort)
	return getLenghtedList(filteredSorted, length)
}

export { getLenghtedList, getFilteredAndSortedList, getFilteredList }

export default getFilteredSortedLenghtedList
