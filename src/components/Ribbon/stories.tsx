import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    color: {
      type: 'radio',
      options: ['primary', 'secondary']
    },
    size: {
      type: 'radio',
      options: ['small', 'normal']
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args}>Bestselling</Ribbon>
  </div>
)
