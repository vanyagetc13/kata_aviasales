import React from 'react'
import styles from './BoxWrapper.module.css'

const BoxWrapper = ({ children, additionalClassName, ...rest }) => {
	const rootClasses = [styles.wrapper].concat(additionalClassName)
	return (
		<div className={rootClasses.join(' ')} {...rest}>
			{children}
		</div>
	)
}

export default BoxWrapper
