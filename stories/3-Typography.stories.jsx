import React from 'react'

import TextTitle from '../components/text-title'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Merhaba Dünya</TextTitle>
    <TextTitle bold={false}>Merhaba Dünya</TextTitle>
  </div>
)
