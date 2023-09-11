import type { Meta, StoryObj } from '@storybook/react';
import TagLabel from './TagLabel';

const meta = {
  title: 'Example/Tag',
  component: TagLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tagName: {
      control: {
        type: 'text',
      },
    },
    count: {
      control: {
        type: 'number',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TagLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagName: 'tag1',
  },
};

export const TagNameWithCounter: Story = {
  args: {
    tagName: 'tag1',
    count: 10,
  },
};
