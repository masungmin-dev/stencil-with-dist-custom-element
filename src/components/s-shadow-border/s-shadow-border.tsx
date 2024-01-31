import { Component, h } from '@stencil/core';

@Component({
  tag: 's-shadow-border',
  shadow: true,
})
export class SShadowBorder {
  render() {
    return (
      <div style={{ border: '1px solid red' }}>
        <p>this parent component is shadow</p>
        <slot></slot>
      </div>
    );
  }
}
