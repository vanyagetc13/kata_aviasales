import React from 'react'
import BoxWrapper from '../BoxWrapper/BoxWrapper'
import CheckBoxInput from '../CheckBoxInput/CheckBoxInput'
import styles from './Filters.module.css'

const Filters = ({ filterGroupName = 'Filter Group', filterList }) => {
	return (
		<BoxWrapper additionalClassName={styles.wrapper}>
			<h3 className={styles.title}>{filterGroupName}</h3>
			<ul className={styles.filterList}>
				{filterList.map((filter) => (
					<li className={styles.filterListItem} key={filter.text}>
						<CheckBoxInput text={filter.text} checked={filter.checked} onToggle={filter.onToggle} />
					</li>
				))}
			</ul>
		</BoxWrapper>
	)
}

export default Filters
