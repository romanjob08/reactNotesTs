import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TableHeader} from "../components";

export default {
    title: 'TableHeader',
    component: TableHeader,

} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => <TableHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const AltVariant = Template.bind({});
AltVariant.args = {
};
