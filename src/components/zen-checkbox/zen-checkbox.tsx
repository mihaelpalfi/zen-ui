import { Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { CheckboxChangeEventDetail } from './types';

@Component({
  tag: 'zen-checkbox',
  styleUrl: 'zen-checkbox.scss',
  shadow: true,
})
export class ZenCheckbox {
  /** Set checked state. */
  @Prop({ mutable: true }) checked = false;

  /** Disables checkbox. */
  @Prop() readonly disabled = false;

  /** Label of the checkbox. */
  @Prop() readonly label: string = null;

  /** Shows a red asterisk after label. */
  @Prop() readonly required: false;

  /** Emitted when the checked property has changed. */
  @Event() checkboxChange!: EventEmitter<CheckboxChangeEventDetail>;

  @Watch('checked')
  checkedChanged(isChecked: boolean): void {
    this.checkboxChange.emit({
      checked: isChecked,
    });
  }

  private onClick = (ev: MouseEvent) => {
    ev.preventDefault();
    this.checked = !this.checked;
  };

  render(): HTMLElement {
    return (
      <Host onClick={this.onClick}>
        <input
          type="checkbox"
          class="input-control"
          disabled={this.disabled}
          checked={this.checked}
          required={this.required}
        />
        {this.label ? (
          <label class={{ disabled: this.disabled }}>
            {this.label} {this.required ? <span class="required">*</span> : null}
          </label>
        ) : null}
      </Host>
    );
  }
}
