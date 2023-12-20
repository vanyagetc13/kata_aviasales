import React from 'react'
import styles from './MainWrapper.module.css'

const MainWrapper = ({ children }) => {
	return <main className={styles.main}>{children}</main>
}

export default MainWrapper
