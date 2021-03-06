import { newSpecPage } from '@stencil/core/testing';
import { ZenTableCell } from '../zen-table-cell';

describe('zen-table-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenTableCell],
      html: `<zen-table-cell>Content</zen-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <zen-table-cell>
        <mock:shadow-root>
          <slot>
          </slot>
        </mock:shadow-root>
        Content
      </zen-table-cell>
    `);
  });
});
