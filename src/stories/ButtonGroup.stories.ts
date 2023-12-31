import type { Meta, StoryObj } from '@storybook/vue3'

import ButtonGroup from './ButtonGroup.vue'

import * as ButtonStories from './Button.stories'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Pair: Story = {
  render: (args) => ({
    components: { ButtonGroup },
    setup() {
      return { args }
    },
    template: '<ButtonGroup v-bind="args" />'
  }),
  args: {
    buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
    orientation: 'horizontal'
  }
}
