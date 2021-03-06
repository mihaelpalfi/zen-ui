/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { StringifiedJson } from "./stories/components/color-swatch-group/color-swatch-group";
import { Align, AvatarSize, Duration, NotificationVariant, Position, TextSize, TooltipVariant } from "./components/helpers/types";
import { ButtonVariants } from "./components/zen-button/types";
import { OptionValue } from "./components/zen-menu-item/zen-option";
import { OptionValue as OptionValue1 } from "./components/zen-menu-item/zen-option";
import { StepItem } from "./components/zen-steps/zen-steps";
import { StepsFilter } from "./components/zen-steps/types";
import { TabItem, TabValue } from "./components/zen-tabs/zen-tabs";
export namespace Components {
    interface ColorSwatch {
        /**
          * Hex color value
         */
        "color": string;
        /**
          * True if color is considered bright
         */
        "isBrightColor": boolean;
        /**
          * Scss variable name
         */
        "varName": string;
    }
    interface ColorSwatchGroup {
        /**
          * Array of colors
         */
        "colors": StringifiedJson;
    }
    interface DocsTable {
        /**
          * Data from stencilDocs.json
         */
        "docs": string;
    }
    interface HtmlPlayground {
        /**
          * Save current value to local storage and restore it on load
         */
        "saveValue": true;
        /**
          * What framework is initally selected
         */
        "selectedFramework": string;
        /**
          * What framework is initally selected
         */
        "sourceCodes": SourceCodes;
    }
    interface TextWithDetails {
    }
    interface ZenAnimate {
        /**
          * Prop that will show the slot
         */
        "show": boolean;
    }
    interface ZenAvatar {
        /**
          * Background color
         */
        "background": string;
        /**
          * Font color
         */
        "color": string;
        /**
          * Email
         */
        "email": string;
        /**
          * Image URL
         */
        "imageUrl": string;
        /**
          * Avatar size
         */
        "size": AvatarSize;
        /**
          * Name and Surname
         */
        "userName": string;
    }
    interface ZenButton {
        /**
          * If present, button will be disabled
         */
        "disabled"?: boolean;
        /**
          * If present, will show a spinner
         */
        "loading"?: boolean;
        /**
          * Color variant of the button
         */
        "variant": ButtonVariants;
    }
    interface ZenCheckbox {
        /**
          * Set checked state.
         */
        "checked": boolean;
        /**
          * Disables checkbox.
         */
        "disabled": false;
        /**
          * Label of the checkbox.
         */
        "label": string;
        /**
          * Shows a red asterisk after label.
         */
        "required": false;
    }
    interface ZenDropdown {
        /**
          * Don't draw border around field
         */
        "borderless": false;
        /**
          * Close dropdown menu after selecting an item
         */
        "closeOnSelect": true;
        /**
          * Disable any changes
         */
        "disabled"?: boolean;
        /**
          * Alignment of field content and menu (if menuWidth set).
         */
        "fieldAlign": Align;
        /**
          * To determine if there's enough space under field on open
         */
        "menuHeight": number;
        /**
          * Width of menu. Set '100%' to match field width.
         */
        "menuWidth": string;
        /**
          * Text in field if nothing selected
         */
        "placeholder": string;
        /**
          * Close an opened dropdown menu
         */
        "toggle": (open?: boolean) => Promise<void>;
        /**
          * Selected option
         */
        "value": OptionValue;
    }
    interface ZenFormGroup {
    }
    interface ZenInput {
        /**
          * Disables input.
         */
        "disabled": false;
        /**
          * Focus next control when pressing Enter key
         */
        "enterToTab": true;
        /**
          * Paint focused border
         */
        "hasFocus": boolean;
        /**
          * Shows invalid styles.
         */
        "invalid": false;
        /**
          * Placeholder of the input.
         */
        "placeholder": string;
        /**
          * The value of the input.
         */
        "value"?: string;
    }
    interface ZenInputSupportText {
        /**
          * Supporting text
         */
        "text": string;
    }
    interface ZenLabel {
        /**
          * Text of the label
         */
        "label": string;
        /**
          * Shows a red asterisk after label
         */
        "required": false;
    }
    interface ZenNotification {
        /**
          * Can dismiss
         */
        "dismiss": boolean;
        /**
          * Hide duration
         */
        "dismissDuration": Duration;
        /**
          * Title
         */
        "heading": string;
        /**
          * Height
         */
        "height": string;
        /**
          * Message
         */
        "message": string;
        /**
          * Variant
         */
        "variant": NotificationVariant;
        /**
          * Width
         */
        "width": string;
    }
    interface ZenOption {
        /**
          * False to enable custom item padding
         */
        "defaultPadding": boolean;
        /**
          * Disable selecting option in dropdown
         */
        "disabled"?: boolean;
        /**
          * Render item as focused
         */
        "focused": boolean;
        /**
          * Prevents default hover style on mouse hover
         */
        "noHover"?: boolean;
        /**
          * Render item as selected
         */
        "selected": boolean;
        /**
          * Value of option when used inside a dropdown
         */
        "value": OptionValue;
    }
    interface ZenSpinner {
    }
    interface ZenSteps {
        /**
          * Index of currently active step
         */
        "activeIndex": number;
        /**
          * User can click step to go to step
         */
        "clickable": StepsFilter;
        /**
          * Ordered array of possible steps
         */
        "steps": Array<StepItem>;
    }
    interface ZenTable {
    }
    interface ZenTableCell {
    }
    interface ZenTableHeader {
        /**
          * Remains fixed at the top of the table during vertical scrolling
         */
        "sticky": false;
    }
    interface ZenTableHeaderCell {
        /**
          * Remains fixed at the top of the table during vertical scrolling
         */
        "sticky": false;
    }
    interface ZenTableRow {
    }
    interface ZenTabs {
        /**
          * Index of currently selected tab.
         */
        "tabs": TabItem[];
        /**
          * Index of currently selected tab.
         */
        "value": TabValue;
    }
    interface ZenText {
        /**
          * Align content to left, right, center (text-align)
         */
        "align": Align;
        /**
          * Render bold text
         */
        "bold": false;
        /**
          * Disabled
         */
        "disabled": false;
        /**
          * Apply heading styles
         */
        "heading": false;
        /**
          * Layout as inlined
         */
        "inline": false;
        /**
          * Render italic text
         */
        "italic": false;
        /**
          * Convert casing to lowercase
         */
        "lowercase": false;
        /**
          * Show text as gray. Useful for disabled things
         */
        "pale": false;
        /**
          * Font size
         */
        "size": TextSize;
        /**
          * Strikethrough
         */
        "strikethrough": false;
        /**
          * Truncate
         */
        "truncate": false;
        /**
          * Underlined
         */
        "underline": false;
        /**
          * Convert casing to uppercase
         */
        "uppercase": false;
    }
    interface ZenTextarea {
        /**
          * Appends attribute disabled.
         */
        "disabled": false;
        /**
          * Placeholder of the textarea.
         */
        "placeholder": string;
        /**
          * Appends attribute required.
         */
        "required": false;
        /**
          * Prefilled text content
         */
        "text"?: string | null;
    }
    interface ZenTooltip {
        /**
          * Dont hide tooltip
         */
        "alwaysVisible"?: boolean;
        /**
          * Pointing arrow - like a cartoon balloon
         */
        "hasArrow"?: boolean;
        /**
          * Delay between mouse out and tooltip hide (in ms)
         */
        "hideDelay": number;
        /**
          * Set tooltip label
         */
        "label"?: string;
        /**
          * Limit tooltip's height and make content scroll
         */
        "maxHeight": string;
        /**
          * Set tooltip offset to target element
         */
        "offset"?: number;
        /**
          * Set tooltip position
         */
        "position"?: Position;
        /**
          * Delay between mouse enter and tooltip show (in ms)
         */
        "showDelay": number;
        /**
          * Set tooltip variant
         */
        "variant"?: TooltipVariant;
    }
}
declare global {
    interface HTMLColorSwatchElement extends Components.ColorSwatch, HTMLStencilElement {
    }
    var HTMLColorSwatchElement: {
        prototype: HTMLColorSwatchElement;
        new (): HTMLColorSwatchElement;
    };
    interface HTMLColorSwatchGroupElement extends Components.ColorSwatchGroup, HTMLStencilElement {
    }
    var HTMLColorSwatchGroupElement: {
        prototype: HTMLColorSwatchGroupElement;
        new (): HTMLColorSwatchGroupElement;
    };
    interface HTMLDocsTableElement extends Components.DocsTable, HTMLStencilElement {
    }
    var HTMLDocsTableElement: {
        prototype: HTMLDocsTableElement;
        new (): HTMLDocsTableElement;
    };
    interface HTMLHtmlPlaygroundElement extends Components.HtmlPlayground, HTMLStencilElement {
    }
    var HTMLHtmlPlaygroundElement: {
        prototype: HTMLHtmlPlaygroundElement;
        new (): HTMLHtmlPlaygroundElement;
    };
    interface HTMLTextWithDetailsElement extends Components.TextWithDetails, HTMLStencilElement {
    }
    var HTMLTextWithDetailsElement: {
        prototype: HTMLTextWithDetailsElement;
        new (): HTMLTextWithDetailsElement;
    };
    interface HTMLZenAnimateElement extends Components.ZenAnimate, HTMLStencilElement {
    }
    var HTMLZenAnimateElement: {
        prototype: HTMLZenAnimateElement;
        new (): HTMLZenAnimateElement;
    };
    interface HTMLZenAvatarElement extends Components.ZenAvatar, HTMLStencilElement {
    }
    var HTMLZenAvatarElement: {
        prototype: HTMLZenAvatarElement;
        new (): HTMLZenAvatarElement;
    };
    interface HTMLZenButtonElement extends Components.ZenButton, HTMLStencilElement {
    }
    var HTMLZenButtonElement: {
        prototype: HTMLZenButtonElement;
        new (): HTMLZenButtonElement;
    };
    interface HTMLZenCheckboxElement extends Components.ZenCheckbox, HTMLStencilElement {
    }
    var HTMLZenCheckboxElement: {
        prototype: HTMLZenCheckboxElement;
        new (): HTMLZenCheckboxElement;
    };
    interface HTMLZenDropdownElement extends Components.ZenDropdown, HTMLStencilElement {
    }
    var HTMLZenDropdownElement: {
        prototype: HTMLZenDropdownElement;
        new (): HTMLZenDropdownElement;
    };
    interface HTMLZenFormGroupElement extends Components.ZenFormGroup, HTMLStencilElement {
    }
    var HTMLZenFormGroupElement: {
        prototype: HTMLZenFormGroupElement;
        new (): HTMLZenFormGroupElement;
    };
    interface HTMLZenInputElement extends Components.ZenInput, HTMLStencilElement {
    }
    var HTMLZenInputElement: {
        prototype: HTMLZenInputElement;
        new (): HTMLZenInputElement;
    };
    interface HTMLZenInputSupportTextElement extends Components.ZenInputSupportText, HTMLStencilElement {
    }
    var HTMLZenInputSupportTextElement: {
        prototype: HTMLZenInputSupportTextElement;
        new (): HTMLZenInputSupportTextElement;
    };
    interface HTMLZenLabelElement extends Components.ZenLabel, HTMLStencilElement {
    }
    var HTMLZenLabelElement: {
        prototype: HTMLZenLabelElement;
        new (): HTMLZenLabelElement;
    };
    interface HTMLZenNotificationElement extends Components.ZenNotification, HTMLStencilElement {
    }
    var HTMLZenNotificationElement: {
        prototype: HTMLZenNotificationElement;
        new (): HTMLZenNotificationElement;
    };
    interface HTMLZenOptionElement extends Components.ZenOption, HTMLStencilElement {
    }
    var HTMLZenOptionElement: {
        prototype: HTMLZenOptionElement;
        new (): HTMLZenOptionElement;
    };
    interface HTMLZenSpinnerElement extends Components.ZenSpinner, HTMLStencilElement {
    }
    var HTMLZenSpinnerElement: {
        prototype: HTMLZenSpinnerElement;
        new (): HTMLZenSpinnerElement;
    };
    interface HTMLZenStepsElement extends Components.ZenSteps, HTMLStencilElement {
    }
    var HTMLZenStepsElement: {
        prototype: HTMLZenStepsElement;
        new (): HTMLZenStepsElement;
    };
    interface HTMLZenTableElement extends Components.ZenTable, HTMLStencilElement {
    }
    var HTMLZenTableElement: {
        prototype: HTMLZenTableElement;
        new (): HTMLZenTableElement;
    };
    interface HTMLZenTableCellElement extends Components.ZenTableCell, HTMLStencilElement {
    }
    var HTMLZenTableCellElement: {
        prototype: HTMLZenTableCellElement;
        new (): HTMLZenTableCellElement;
    };
    interface HTMLZenTableHeaderElement extends Components.ZenTableHeader, HTMLStencilElement {
    }
    var HTMLZenTableHeaderElement: {
        prototype: HTMLZenTableHeaderElement;
        new (): HTMLZenTableHeaderElement;
    };
    interface HTMLZenTableHeaderCellElement extends Components.ZenTableHeaderCell, HTMLStencilElement {
    }
    var HTMLZenTableHeaderCellElement: {
        prototype: HTMLZenTableHeaderCellElement;
        new (): HTMLZenTableHeaderCellElement;
    };
    interface HTMLZenTableRowElement extends Components.ZenTableRow, HTMLStencilElement {
    }
    var HTMLZenTableRowElement: {
        prototype: HTMLZenTableRowElement;
        new (): HTMLZenTableRowElement;
    };
    interface HTMLZenTabsElement extends Components.ZenTabs, HTMLStencilElement {
    }
    var HTMLZenTabsElement: {
        prototype: HTMLZenTabsElement;
        new (): HTMLZenTabsElement;
    };
    interface HTMLZenTextElement extends Components.ZenText, HTMLStencilElement {
    }
    var HTMLZenTextElement: {
        prototype: HTMLZenTextElement;
        new (): HTMLZenTextElement;
    };
    interface HTMLZenTextareaElement extends Components.ZenTextarea, HTMLStencilElement {
    }
    var HTMLZenTextareaElement: {
        prototype: HTMLZenTextareaElement;
        new (): HTMLZenTextareaElement;
    };
    interface HTMLZenTooltipElement extends Components.ZenTooltip, HTMLStencilElement {
    }
    var HTMLZenTooltipElement: {
        prototype: HTMLZenTooltipElement;
        new (): HTMLZenTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "color-swatch": HTMLColorSwatchElement;
        "color-swatch-group": HTMLColorSwatchGroupElement;
        "docs-table": HTMLDocsTableElement;
        "html-playground": HTMLHtmlPlaygroundElement;
        "text-with-details": HTMLTextWithDetailsElement;
        "zen-animate": HTMLZenAnimateElement;
        "zen-avatar": HTMLZenAvatarElement;
        "zen-button": HTMLZenButtonElement;
        "zen-checkbox": HTMLZenCheckboxElement;
        "zen-dropdown": HTMLZenDropdownElement;
        "zen-form-group": HTMLZenFormGroupElement;
        "zen-input": HTMLZenInputElement;
        "zen-input-support-text": HTMLZenInputSupportTextElement;
        "zen-label": HTMLZenLabelElement;
        "zen-notification": HTMLZenNotificationElement;
        "zen-option": HTMLZenOptionElement;
        "zen-spinner": HTMLZenSpinnerElement;
        "zen-steps": HTMLZenStepsElement;
        "zen-table": HTMLZenTableElement;
        "zen-table-cell": HTMLZenTableCellElement;
        "zen-table-header": HTMLZenTableHeaderElement;
        "zen-table-header-cell": HTMLZenTableHeaderCellElement;
        "zen-table-row": HTMLZenTableRowElement;
        "zen-tabs": HTMLZenTabsElement;
        "zen-text": HTMLZenTextElement;
        "zen-textarea": HTMLZenTextareaElement;
        "zen-tooltip": HTMLZenTooltipElement;
    }
}
declare namespace LocalJSX {
    interface ColorSwatch {
        /**
          * Hex color value
         */
        "color"?: string;
        /**
          * True if color is considered bright
         */
        "isBrightColor"?: boolean;
        /**
          * Scss variable name
         */
        "varName"?: string;
    }
    interface ColorSwatchGroup {
        /**
          * Array of colors
         */
        "colors"?: StringifiedJson;
    }
    interface DocsTable {
        /**
          * Data from stencilDocs.json
         */
        "docs"?: string;
    }
    interface HtmlPlayground {
        /**
          * Save current value to local storage and restore it on load
         */
        "saveValue"?: true;
        /**
          * What framework is initally selected
         */
        "selectedFramework"?: string;
        /**
          * What framework is initally selected
         */
        "sourceCodes"?: SourceCodes;
    }
    interface TextWithDetails {
    }
    interface ZenAnimate {
        /**
          * Prop that will show the slot
         */
        "show"?: boolean;
    }
    interface ZenAvatar {
        /**
          * Background color
         */
        "background"?: string;
        /**
          * Font color
         */
        "color"?: string;
        /**
          * Email
         */
        "email"?: string;
        /**
          * Image URL
         */
        "imageUrl"?: string;
        /**
          * Avatar size
         */
        "size"?: AvatarSize;
        /**
          * Name and Surname
         */
        "userName"?: string;
    }
    interface ZenButton {
        /**
          * If present, button will be disabled
         */
        "disabled"?: boolean;
        /**
          * If present, will show a spinner
         */
        "loading"?: boolean;
        /**
          * Color variant of the button
         */
        "variant"?: ButtonVariants;
    }
    interface ZenCheckbox {
        /**
          * Set checked state.
         */
        "checked"?: boolean;
        /**
          * Disables checkbox.
         */
        "disabled"?: false;
        /**
          * Label of the checkbox.
         */
        "label"?: string;
        /**
          * Shows a red asterisk after label.
         */
        "required"?: false;
    }
    interface ZenDropdown {
        /**
          * Don't draw border around field
         */
        "borderless"?: false;
        /**
          * Close dropdown menu after selecting an item
         */
        "closeOnSelect"?: true;
        /**
          * Disable any changes
         */
        "disabled"?: boolean;
        /**
          * Alignment of field content and menu (if menuWidth set).
         */
        "fieldAlign"?: Align;
        /**
          * To determine if there's enough space under field on open
         */
        "menuHeight"?: number;
        /**
          * Width of menu. Set '100%' to match field width.
         */
        "menuWidth"?: string;
        /**
          * Text in field if nothing selected
         */
        "placeholder"?: string;
        /**
          * Selected option
         */
        "value"?: OptionValue;
    }
    interface ZenFormGroup {
    }
    interface ZenInput {
        /**
          * Disables input.
         */
        "disabled"?: false;
        /**
          * Focus next control when pressing Enter key
         */
        "enterToTab"?: true;
        /**
          * Paint focused border
         */
        "hasFocus"?: boolean;
        /**
          * Shows invalid styles.
         */
        "invalid"?: false;
        /**
          * Placeholder of the input.
         */
        "placeholder"?: string;
        /**
          * The value of the input.
         */
        "value"?: string;
    }
    interface ZenInputSupportText {
        /**
          * Supporting text
         */
        "text"?: string;
    }
    interface ZenLabel {
        /**
          * Text of the label
         */
        "label"?: string;
        /**
          * Shows a red asterisk after label
         */
        "required"?: false;
    }
    interface ZenNotification {
        /**
          * Can dismiss
         */
        "dismiss"?: boolean;
        /**
          * Hide duration
         */
        "dismissDuration"?: Duration;
        /**
          * Title
         */
        "heading"?: string;
        /**
          * Height
         */
        "height"?: string;
        /**
          * Message
         */
        "message"?: string;
        /**
          * Variant
         */
        "variant"?: NotificationVariant;
        /**
          * Width
         */
        "width"?: string;
    }
    interface ZenOption {
        /**
          * False to enable custom item padding
         */
        "defaultPadding"?: boolean;
        /**
          * Disable selecting option in dropdown
         */
        "disabled"?: boolean;
        /**
          * Render item as focused
         */
        "focused"?: boolean;
        /**
          * Prevents default hover style on mouse hover
         */
        "noHover"?: boolean;
        /**
          * Render item as selected
         */
        "selected"?: boolean;
        /**
          * Value of option when used inside a dropdown
         */
        "value"?: OptionValue;
    }
    interface ZenSpinner {
    }
    interface ZenSteps {
        /**
          * Index of currently active step
         */
        "activeIndex"?: number;
        /**
          * User can click step to go to step
         */
        "clickable"?: StepsFilter;
        /**
          * Ordered array of possible steps
         */
        "steps"?: Array<StepItem>;
    }
    interface ZenTable {
    }
    interface ZenTableCell {
    }
    interface ZenTableHeader {
        /**
          * Remains fixed at the top of the table during vertical scrolling
         */
        "sticky"?: false;
    }
    interface ZenTableHeaderCell {
        /**
          * Remains fixed at the top of the table during vertical scrolling
         */
        "sticky"?: false;
    }
    interface ZenTableRow {
    }
    interface ZenTabs {
        /**
          * Index of currently selected tab.
         */
        "tabs"?: TabItem[];
        /**
          * Index of currently selected tab.
         */
        "value"?: TabValue;
    }
    interface ZenText {
        /**
          * Align content to left, right, center (text-align)
         */
        "align"?: Align;
        /**
          * Render bold text
         */
        "bold"?: false;
        /**
          * Disabled
         */
        "disabled"?: false;
        /**
          * Apply heading styles
         */
        "heading"?: false;
        /**
          * Layout as inlined
         */
        "inline"?: false;
        /**
          * Render italic text
         */
        "italic"?: false;
        /**
          * Convert casing to lowercase
         */
        "lowercase"?: false;
        /**
          * Show text as gray. Useful for disabled things
         */
        "pale"?: false;
        /**
          * Font size
         */
        "size"?: TextSize;
        /**
          * Strikethrough
         */
        "strikethrough"?: false;
        /**
          * Truncate
         */
        "truncate"?: false;
        /**
          * Underlined
         */
        "underline"?: false;
        /**
          * Convert casing to uppercase
         */
        "uppercase"?: false;
    }
    interface ZenTextarea {
        /**
          * Appends attribute disabled.
         */
        "disabled"?: false;
        /**
          * Placeholder of the textarea.
         */
        "placeholder"?: string;
        /**
          * Appends attribute required.
         */
        "required"?: false;
        /**
          * Prefilled text content
         */
        "text"?: string | null;
    }
    interface ZenTooltip {
        /**
          * Dont hide tooltip
         */
        "alwaysVisible"?: boolean;
        /**
          * Pointing arrow - like a cartoon balloon
         */
        "hasArrow"?: boolean;
        /**
          * Delay between mouse out and tooltip hide (in ms)
         */
        "hideDelay"?: number;
        /**
          * Set tooltip label
         */
        "label"?: string;
        /**
          * Limit tooltip's height and make content scroll
         */
        "maxHeight"?: string;
        /**
          * Set tooltip offset to target element
         */
        "offset"?: number;
        /**
          * Set tooltip position
         */
        "position"?: Position;
        /**
          * Delay between mouse enter and tooltip show (in ms)
         */
        "showDelay"?: number;
        /**
          * Set tooltip variant
         */
        "variant"?: TooltipVariant;
    }
    interface IntrinsicElements {
        "color-swatch": ColorSwatch;
        "color-swatch-group": ColorSwatchGroup;
        "docs-table": DocsTable;
        "html-playground": HtmlPlayground;
        "text-with-details": TextWithDetails;
        "zen-animate": ZenAnimate;
        "zen-avatar": ZenAvatar;
        "zen-button": ZenButton;
        "zen-checkbox": ZenCheckbox;
        "zen-dropdown": ZenDropdown;
        "zen-form-group": ZenFormGroup;
        "zen-input": ZenInput;
        "zen-input-support-text": ZenInputSupportText;
        "zen-label": ZenLabel;
        "zen-notification": ZenNotification;
        "zen-option": ZenOption;
        "zen-spinner": ZenSpinner;
        "zen-steps": ZenSteps;
        "zen-table": ZenTable;
        "zen-table-cell": ZenTableCell;
        "zen-table-header": ZenTableHeader;
        "zen-table-header-cell": ZenTableHeaderCell;
        "zen-table-row": ZenTableRow;
        "zen-tabs": ZenTabs;
        "zen-text": ZenText;
        "zen-textarea": ZenTextarea;
        "zen-tooltip": ZenTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "color-swatch": LocalJSX.ColorSwatch & JSXBase.HTMLAttributes<HTMLColorSwatchElement>;
            "color-swatch-group": LocalJSX.ColorSwatchGroup & JSXBase.HTMLAttributes<HTMLColorSwatchGroupElement>;
            "docs-table": LocalJSX.DocsTable & JSXBase.HTMLAttributes<HTMLDocsTableElement>;
            "html-playground": LocalJSX.HtmlPlayground & JSXBase.HTMLAttributes<HTMLHtmlPlaygroundElement>;
            "text-with-details": LocalJSX.TextWithDetails & JSXBase.HTMLAttributes<HTMLTextWithDetailsElement>;
            "zen-animate": LocalJSX.ZenAnimate & JSXBase.HTMLAttributes<HTMLZenAnimateElement>;
            "zen-avatar": LocalJSX.ZenAvatar & JSXBase.HTMLAttributes<HTMLZenAvatarElement>;
            "zen-button": LocalJSX.ZenButton & JSXBase.HTMLAttributes<HTMLZenButtonElement>;
            "zen-checkbox": LocalJSX.ZenCheckbox & JSXBase.HTMLAttributes<HTMLZenCheckboxElement>;
            "zen-dropdown": LocalJSX.ZenDropdown & JSXBase.HTMLAttributes<HTMLZenDropdownElement>;
            "zen-form-group": LocalJSX.ZenFormGroup & JSXBase.HTMLAttributes<HTMLZenFormGroupElement>;
            "zen-input": LocalJSX.ZenInput & JSXBase.HTMLAttributes<HTMLZenInputElement>;
            "zen-input-support-text": LocalJSX.ZenInputSupportText & JSXBase.HTMLAttributes<HTMLZenInputSupportTextElement>;
            "zen-label": LocalJSX.ZenLabel & JSXBase.HTMLAttributes<HTMLZenLabelElement>;
            "zen-notification": LocalJSX.ZenNotification & JSXBase.HTMLAttributes<HTMLZenNotificationElement>;
            "zen-option": LocalJSX.ZenOption & JSXBase.HTMLAttributes<HTMLZenOptionElement>;
            "zen-spinner": LocalJSX.ZenSpinner & JSXBase.HTMLAttributes<HTMLZenSpinnerElement>;
            "zen-steps": LocalJSX.ZenSteps & JSXBase.HTMLAttributes<HTMLZenStepsElement>;
            "zen-table": LocalJSX.ZenTable & JSXBase.HTMLAttributes<HTMLZenTableElement>;
            "zen-table-cell": LocalJSX.ZenTableCell & JSXBase.HTMLAttributes<HTMLZenTableCellElement>;
            "zen-table-header": LocalJSX.ZenTableHeader & JSXBase.HTMLAttributes<HTMLZenTableHeaderElement>;
            "zen-table-header-cell": LocalJSX.ZenTableHeaderCell & JSXBase.HTMLAttributes<HTMLZenTableHeaderCellElement>;
            "zen-table-row": LocalJSX.ZenTableRow & JSXBase.HTMLAttributes<HTMLZenTableRowElement>;
            "zen-tabs": LocalJSX.ZenTabs & JSXBase.HTMLAttributes<HTMLZenTabsElement>;
            "zen-text": LocalJSX.ZenText & JSXBase.HTMLAttributes<HTMLZenTextElement>;
            "zen-textarea": LocalJSX.ZenTextarea & JSXBase.HTMLAttributes<HTMLZenTextareaElement>;
            "zen-tooltip": LocalJSX.ZenTooltip & JSXBase.HTMLAttributes<HTMLZenTooltipElement>;
        }
    }
}
