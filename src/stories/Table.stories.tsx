import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Table} from "../components";
import {Provider} from "react-redux";
import {setupStore} from "../redux";

const store = setupStore()


export default {
    title: 'Table',
    component: Table,
    argTypes: {
        plugPosition: {
            type: "string",
            description: 'Set position for plug',
            defaultValue: 'left',
            options: {
                left: 'left',
                center: 'center',
            },
            control: {
                type: 'radio'
            }
        },

        thBG: {
            type: "string",
            name: 'Header bg',
            description: 'Set background color for header',
            defaultValue: 'bg-gray-500',
            options: {
                grey: 'bg-gray-500',
                blue: 'bg-blue-300',
                yellow: 'bg-orange-400',
            },
            control: {
                type: 'radio'
            }
        },
        thTextSize: {
            type: "string",
            name: 'Header text size',
            description: 'Set text size for header',
            defaultValue: 'text-lg',
            options: {
                '20px': 'text-lg',
                '25px': 'text-[25px]',
                '27px': 'text-[27px]',
            },
            control: {
                type: 'radio'
            }
        },
        tbBG: {
            type: "string",
            name: 'Body bg',
            description: 'Set background color for body',
            defaultValue: 'bg-gray-300',
            options: {
                grey: 'bg-gray-300',
                blue: 'bg-blue-300',
                yellow: 'bg-orange-400',
            },
            control: {
                type: 'radio'
            }
        },
        tbTextSize: {
            type: "string",
            name: 'Body text size',
            description: 'Set text size for body',
            defaultValue: 'text-[16px]',
            options: {
                '16px': 'text-[16px]',
                '18px': 'text-[18px]',
                '20px': 'text-[20px]',
            },
            control: {
                type: 'radio'
            }
        },
    }
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
    return <Provider store={store}>
        <Table {...args} />
    </Provider>
}

export const Primary = Template.bind({});
Primary.args = {};

export const WithoutData = Template.bind({});
WithoutData.args = {
    notes: [],

};
