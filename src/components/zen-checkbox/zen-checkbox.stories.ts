import { html } from 'lit-html';
import markdown from './readme.md';

export default {
  title: 'Components/Zen Checkbox',
  component: 'zen-checkbox',
  parameters: {
    notes: { markdown },
  },
};

const Template = ({ label, checked, required, disabled }) => {
  return html`<zen-checkbox checked=${checked} disabled=${disabled} label=${label} required=${required} />`;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  checked: false,
  disabled: false,
  required: false,
};