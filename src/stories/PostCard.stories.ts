import type { Meta, StoryObj } from '@storybook/react';
import PostCard from './PostCard';

const meta = {
  title: 'Example/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subTitle: {
      control: {
        type: 'text',
      },
    },
    date: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Post Title',
    subTitle: 'Post Description',
    date: '2021-01-01',
  },
};
