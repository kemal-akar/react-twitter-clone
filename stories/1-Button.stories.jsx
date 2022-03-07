import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'
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
export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
)
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
