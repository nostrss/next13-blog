import type { Meta, StoryObj } from '@storybook/react';
import TagLabel from './TagLabel';

const meta = {
  title: 'Example/Tag',
  component: TagLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tag: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TagLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: 'tag1',
  },
};
