import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from '../components';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        className: {
            type: "string",
            description: 'Appearance of the buttons',
            defaultValue: 'rounded-lg p-1 bg-emerald-800 hover:bg-emerald-600 active:bg-amber-500 focus:outline-none focus:ring focus:ring-green-200 text-lg m-2',
            options: {
                BasicVersion: 'rounded-lg p-1 bg-emerald-800 hover:bg-emerald-600 active:bg-amber-500 focus:outline-none focus:ring focus:ring-green-200 text-lg m-2',
                GradientButton: 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
                OutlineButtons: 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
                ExtraLarge: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
                ColoredShadows: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
                ButtonPills: 'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
            },
            control: {
                type: 'radio'
            }
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    textValue: 'Show archive',
};