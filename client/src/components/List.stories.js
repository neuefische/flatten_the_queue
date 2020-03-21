import React from 'react'
import { mobile } from '../common/storybookDecorator'
import { action } from '@storybook/addon-actions'
import testdata from '../.mockdata/testdata.json'

import List from './List'

export default {
  title: 'Components/List',
  decorators: [storyFn => <section style={mobile}>{storyFn()}</section>],
  component: List,
}

export const DefaultList = () => {
  return <List list={testdata} />
}
