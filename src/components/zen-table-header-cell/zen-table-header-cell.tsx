import { h, Component, Host, Prop } from '@stencil/core';

@Component({
  tag: 'zen-table-header-cell',
  styleUrl: 'zen-table-header-cell.scss',
  shadow: true,
})
export class ZenTableHeaderCell {
  /** Remains fixed at the top of the table during vertical scrolling */
  @Prop() readonly sticky = false;

  render(): HTMLTableHeaderCellElement {
    return (
      <Host class={{ sticky: this.sticky }}>
        <slot></slot>
      </Host>
    );
  }
}
