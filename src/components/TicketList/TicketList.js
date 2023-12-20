import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../../store/reducers/searchSlice'
import getFilteredSortedLenghtedList from '../../utils/list'
import TicketCard from '../TicketCard/TicketCard'
import styles from './TicketList.module.css'

const TicketList = React.memo(function TicketListNotMemed() {
	const [currentLength, setCurrentLength] = useState(5)
	const dispatch = useDispatch()
	const list = useSelector((state) => state.search.ticketList)
	const sort = useSelector((state) => state.sort.ticketsSort)
	const filters = useSelector((state) => state.filter.transfers)
	const loading = useSelector((state) => state.search.loadingTickets)
	const searchID = useSelector((state) => state.search.searchID)

	const ourList = useMemo(
		() =>
			getFilteredSortedLenghtedList(
				list,
				filters.filter((filter) => filter.checked),
				sort,
				currentLength
			),
		[list, filters, sort, currentLength]
	)

	useEffect(() => {
		if (searchID) dispatch(getTickets(searchID))
	}, [searchID, list])

	if (loading) return <div>Loading...</div>
	if (!ourList.length && !loading) return <div>No tickets found</div>
	return (
		<>
			<div className={styles.list}>
				{ourList.map((ticket, idx) => (
					<TicketCard key={idx} ticket={ticket} />
				))}
			</div>
			<button className={styles.btn} onClick={() => setCurrentLength((prev) => prev + 5)}>
				Показать еще 5 билетов!
			</button>
		</>
	)
})

export default TicketList