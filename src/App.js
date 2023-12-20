import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from './store/reducers/filterSlice'
import logo from './images/Logo.svg'
import MainWrapper from './components/MainWrapper/MainWrapper'
import Filters from './components/Filters/Filters'
import { getSearchID } from './store/reducers/searchSlice'
import './App.css'
import SortTab from './components/SortTab/SortTab'
import TicketList from './components/TicketList/TicketList'

function App() {
	const dispatch = useDispatch()
	const filters = useSelector((state) => state.filter.transfers)
	const stoped = useSelector((state) => state.search.stoped)
	const loadingSearchID = useSelector((state) => state.search.loadingSearchID)
	const filterList = filters.map((filter) => ({
		...filter,
		onToggle: () => dispatch(toggleFilter(filter.key)),
	}))
	useEffect(() => {
		dispatch(getSearchID())
	}, [])
	return (
		<MainWrapper>
			<img src={logo} alt="logo" />
			{!loadingSearchID ? (
				<section className="ticket__section">
					<Filters filterGroupName="количество пересадок" filterList={filterList} />
					<div className="tickets">
						<SortTab />
						<TicketList />
						{!stoped && <div className="processing">Still Processing...</div>}
					</div>
				</section>
			) : (
				<div>Loading the page...</div>
			)}
		</MainWrapper>
	)
}

export default App
