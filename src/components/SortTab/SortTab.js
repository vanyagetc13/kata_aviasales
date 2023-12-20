import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTicketSort } from '../../store/reducers/sortSlice'
import styles from './SortTab.module.css'

const SortTab = () => {
	const sort = useSelector((state) => state.sort.ticketsSort)
	const dispatch = useDispatch()
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<label className={styles.label}>
						<input
							type="radio"
							name="ticketSort"
							className={styles.input}
							value="cheap"
							checked={sort === 'cheap'}
							onChange={() => {
								dispatch(changeTicketSort('cheap'))
							}}
						/>
						Самый дешевый
					</label>
				</li>
				<li className={styles.item}>
					<label className={styles.label}>
						<input
							type="radio"
							name="ticketSort"
							className={styles.input}
							value="fast"
							checked={sort === 'fast'}
							onChange={() => {
								dispatch(changeTicketSort('fast'))
							}}
						/>
						Самый быстрый
					</label>
				</li>
				<li className={styles.item}>
					<label className={styles.label}>
						<input
							type="radio"
							name="ticketSort"
							className={styles.input}
							value="optimal"
							checked={sort === 'optimal'}
							onChange={() => {
								dispatch(changeTicketSort('optimal'))
							}}
						/>
						Оптимальный
					</label>
				</li>
			</ul>
		</div>
	)
}

export default SortTab
