import { newSpecPage } from '@stencil/core/testing';
import { ZenTextarea } from '../zen-textarea';

describe('zen-textarea', () => {
  it('should render with shadow dom', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea></zen-textarea>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
  });

  it('should render with placeholder', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea placeholder="Something here"></zen-textarea>`,
    });
    expect(page.root.shadowRoot.querySelector('textarea').getAttribute('placeholder')).toBe('Something here');
  });

  it('should render with text inside', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea>Hello world!</zen-textarea>`,
    });
    expect(page.root.innerText).toBe('Hello world!');
  });

  it('should render with disabled property', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea disabled></zen-textarea>`,
    });
    expect(page.root.shadowRoot.querySelector('textarea').getAttribute('disabled')).toBe('');
  });

  it('should render with required property', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea required></zen-textarea>`,
    });
    expect(page.root.shadowRoot.querySelector('textarea').getAttribute('required')).toBe('');
  });

  it('changes value prop in onInput', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea></zen-textarea>`,
    });

    const inputElement = page.root.shadowRoot.querySelector('textarea');
    inputElement.value = 'My input content';
    inputElement.dispatchEvent(new Event('input'));

    await page.waitForChanges();

    expect(page.rootInstance.text).toBe('My input content');
  });

  it('changes value prop in onChange', async () => {
    const page = await newSpecPage({
      components: [ZenTextarea],
      html: `<zen-textarea></zen-textarea>`,
    });

    const inputElement = page.root.shadowRoot.querySelector('textarea');
    inputElement.value = 'My changed content';
    inputElement.dispatchEvent(new Event('change'));

    await page.waitForChanges();

    expect(page.rootInstance.text).toBe('My changed content');
  });
});
