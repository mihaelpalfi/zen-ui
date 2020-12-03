import { html } from 'lit-html';
import markdown from './readme.md';

const argTypes = {};

export default {
  title: 'Components/Zen Form Group',
  component: 'zen-form-group',
  argTypes,
  parameters: {
    notes: { markdown },
  },
};

const Template = () => {
  return html`
    <zen-form-group>
      <zen-label label="Username" required></zen-label>
      <zen-input style="margin: .5rem 0;"></zen-input>
      <zen-input-support-text text="This field should be unique"></zen-input-support-text>
    </zen-form-group>
  `;
};

const TemplateSimple = () => {
  return html`
    <zen-form-group>
      <zen-label label="Username"></zen-label>
      <zen-input style="margin: .5rem 0;"></zen-input>
      <zen-input-support-text text="This field should be unique"></zen-input-support-text>
    </zen-form-group>
  `;
};

const TemplateWithLabel = () => {
  return html`
    <zen-form-group>
      <zen-label label="Username"></zen-label>
      <zen-input style="margin: .5rem 0;"></zen-input>
    </zen-form-group>
  `;
};

const TemplateWithLabelRequired = () => {
  return html`
    <zen-form-group>
      <zen-label label="Username" required></zen-label>
      <zen-input style="margin: .5rem 0;" required></zen-input>
    </zen-form-group>
  `;
};

const TemplateWithSupportText = () => {
  return html`
    <zen-form-group>
      <zen-input style="margin: .5rem 0;"></zen-input>
      <zen-input-support-text text="This field should be unique"></zen-input-support-text>
    </zen-form-group>
  `;
};

export const Default = Template.bind({});
export const FormGroupWithLabelAndSupportText = TemplateSimple.bind({});
export const FormGroupWithLabel = TemplateWithLabel.bind({});
export const FormGroupWithLabelRequired = TemplateWithLabelRequired.bind({});
export const FormGroupWithSupportText = TemplateWithSupportText.bind({});