import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { menus } from '@/app/layout';
import Footer from './Footer';

const meta = {
  title: 'Example/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ width: '1192px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
