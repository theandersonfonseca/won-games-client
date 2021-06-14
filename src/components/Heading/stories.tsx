import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      type: 'radio',
      options: ['white', 'black']
    },
    lineLeft: {
      type: 'boolean'
    },
    lineBottom: {
      type: 'boolean'
    },
    size: {
      type: 'radio',
      options: ['small', 'medium']
    },
    lineColor: {
      type: 'radio',
      options: ['primary', 'secondary']
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (props) => <Heading {...props} />

Default.args = {
  children: 'Most Popular'
}
