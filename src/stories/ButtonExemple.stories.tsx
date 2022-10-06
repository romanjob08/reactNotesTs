import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button} from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    textValue: 'Pres my',
    className: 'bg-red-500',
};

export const Secondary = Template.bind({});
Secondary.args = {
        textValue: 'Pres my',
    className: '',
};

export const Large = Template.bind({});
Large.args = {
        textValue: 'Pres my',
    className: '',
};

export const Small = Template.bind({});
Small.args = {
        textValue: 'Pres my',
    className: '',
};
