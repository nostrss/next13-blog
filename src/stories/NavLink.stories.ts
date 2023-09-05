import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';

const meta = {
  title: 'Example/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
};
