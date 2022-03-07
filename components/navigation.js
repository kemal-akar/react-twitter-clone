import React from 'react'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'
import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'home'}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'notification'} notify={5}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Message</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
