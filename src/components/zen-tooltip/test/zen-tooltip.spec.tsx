import { newSpecPage } from '@stencil/core/testing';
import { ZenTooltip } from '../zen-tooltip';

describe('zen-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenTooltip],
      html: `<zen-tooltip></zen-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-tooltip>
        <mock:shadow-root>
          <div class="tooltip dark top">
            <slot name="label"></slot>
          </div>
        </mock:shadow-root>
      </zen-tooltip>
    `);
  });
});
