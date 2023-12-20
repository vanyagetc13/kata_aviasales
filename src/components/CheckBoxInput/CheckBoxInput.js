import React from 'react'
import styles from './CheckBoxInput.module.css'

const CheckBoxInput = ({ text = 'text', checked = true, onToggle = () => {} }) => {
	return (
		<label className={styles.label}>
			<input type="checkbox" className={styles.input} checked={checked} onChange={onToggle} />
			<div className={styles.checkbox}></div>
			{text}
		</label>
	)
}

export default CheckBoxInput
