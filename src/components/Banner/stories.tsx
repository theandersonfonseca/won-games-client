import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    ribbon: {
      type: 'string'
    },
    ribbonSize: {
      type: 'radio',
      options: ['small', 'normal']
    },
    ribbonColor: {
      type: 'radio',
      options: ['primary', 'secondary']
    }
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
