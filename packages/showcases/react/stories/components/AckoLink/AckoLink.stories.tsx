import { AckoLink } from '@acko-components/atomic-components';

import { Meta, Story } from '@storybook/react';

import AckoLinkCsf from '../../../../core/src/components/AckoLink.csf';

export default AckoLinkCsf(AckoLink) as Meta;

const Template: Story = (args) => <AckoLink {...args} />;

export const Overview = Template.bind({});
