import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TableBody} from "../components";

export default {
    title: 'TableBody',
    component: TableBody,

} as ComponentMeta<typeof TableBody>;

const Template: ComponentStory<typeof TableBody> = (args) => <TableBody {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const AltVariant = Template.bind({});
AltVariant.args = {
};
