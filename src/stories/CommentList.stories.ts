import type { Meta, StoryObj } from '@storybook/react';
import CommentList from './CommentList';

const meta = {
  title: 'Example/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {},
};
