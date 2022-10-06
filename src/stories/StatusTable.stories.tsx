import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {StatusTable} from "../components";

export default {
    title: 'StatusTable',
    component: StatusTable,

} as ComponentMeta<typeof StatusTable>;

const Template: ComponentStory<typeof StatusTable> = (args) => <StatusTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const AltVariant = Template.bind({});
AltVariant.args = {
};
