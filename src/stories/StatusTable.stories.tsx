import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {StatusTable} from "../components";
import {Provider} from "react-redux";
import {setupStore} from "../redux";

const store = setupStore()

export default {
    title: 'StatusTable',
    component: StatusTable,
} as ComponentMeta<typeof StatusTable>;

const Template: ComponentStory<typeof StatusTable> = (args) => <Provider store={store}>
    <StatusTable {...args} />
</Provider>

export const Default = Template.bind({});
Default.args = {};

export const AltVariant = Template.bind({});
AltVariant.args = {
    BGHeader: 'bg-orange-400',
    BGRow: 'bg-blue-300'
};
