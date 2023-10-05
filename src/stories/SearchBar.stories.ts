import type { Meta, StoryObj } from '@storybook/vue3'
import SearchBar from './SearchBar.vue'

const meta = {
  title: 'Example/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {},
  args: { primary: false }
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    placeholder: 'Search'
  }
}

export const Secondary: Story = {
  args: {
    primary: false,
    placeholder: 'Search'
  }
}
