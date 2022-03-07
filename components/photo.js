import React from 'react'
import styles from './photo.module.css'
import cn from 'classnames'
function Photo({
  src = 'https://pbs.twimg.com/profile_images/1329780013927960578/8MHDc6fg_400x400.jpg',
  alt,
  children
}) {
  return (
    <div className={cn([styles.photo])}>
      <img src={src} alt={alt} className={cn([styles.img])} />
      {children}
    </div>
  )
}
export default Photo
