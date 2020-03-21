import React from 'react'
import { mobile } from '../common/storybookDecorator'
import { action } from '@storybook/addon-actions'
import testdata from '../.mockdata/testdata.json'
import ListItem from './ListItem'

export default {
  title: 'Components/ListItem',
  decorators: [storyFn => <section style={mobile}>{storyFn()}</section>],
  component: ListItem,
}

export const DefaultListItem = () => {
  return <ListItem item={testdata[0]} />
}
