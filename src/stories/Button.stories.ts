import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './TheButton.vue'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
  args: { primary: false }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Secondary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    ...Primary.args,
    primary: false
  }
}

export const Large: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    ...Primary.args,
    size: 'large'
  }
}

export const Small: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"/>'
  }),
  args: {
    ...Primary.args,
    size: 'small'
  }
}
