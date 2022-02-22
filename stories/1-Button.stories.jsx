import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button'
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>Save</Button>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button'
}
export const Normal = () => <Button label="Button">Deneme</Button>
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
