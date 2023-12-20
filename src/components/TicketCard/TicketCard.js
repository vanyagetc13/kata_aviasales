import React from 'react'
import BoxWrapper from '../BoxWrapper/BoxWrapper'
import styles from './TicketCard.module.css'

const TicketCard = ({ ticket }) => {
	const convertPrice = (price = 0) => {
		const arr = price.toString().split('')
		if (arr.length > 6) arr.splice(arr.length - 6, 0, ' ')
		if (arr.length > 3) arr.splice(arr.length - 3, 0, ' ')
		return arr.join('') + ' Р'
	}
	const getNormalizedDuration = (duration) => {
		const hours = Math.floor(duration / 60)
		let minutes = duration - hours * 60
		if (minutes < 10) minutes = '0' + minutes
		return `${hours}:${minutes}`
	}
	const getPeriodOfFlight = (dateString, duration) => {
		const date = new Date(dateString)
		const date2 = new Date(Number(date) + duration * 60 * 1000)
		const period = date.getHours() + ':' + date.getMinutes() + ' – ' + date2.getHours() + ':' + date2.getMinutes()
		duration = getNormalizedDuration(duration)
		return { period, duration }
	}
	return (
		<BoxWrapper>
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<div className={styles.price}>{convertPrice(ticket.price)}</div>
					<img src={`//pics.avs.io/110/36/${ticket.carrier}.png`} alt={`carrier ${ticket.carrier}`} />
				</div>
				<div className={styles.routes}>
					{ticket?.segments?.map((seg, idx) => {
						const { period, duration } = getPeriodOfFlight(seg.date, seg.duration)
						return (
							<div className={styles.route} key={idx}>
								<div className={styles.routeBlock}>
									<div className={styles.routeBlockName}>{seg.origin + ' – ' + seg.destination}</div>
									<div className={styles.routeBlockDescription}>{period}</div>
								</div>
								<div className={styles.routeBlock}>
									<div className={styles.routeBlockName}>в пути</div>
									<div className={styles.routeBlockDescription}>{duration}</div>
								</div>
								<div className={styles.routeBlock}>
									<div className={styles.routeBlockName}>
										{seg.stops.length || 'Без пересадок'}
										{!!seg.stops.length && ' пересадки'}
									</div>
									<div className={styles.routeBlockDescription}>{seg.stops.join(', ') || '–'}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</BoxWrapper>
	)
}

export default TicketCard
