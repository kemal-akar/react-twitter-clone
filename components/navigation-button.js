import React from 'react'
import cn from 'classnames'
import styles from './navigation-button.module.css'
import Button from './button'
function NavigationButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavigationButton
