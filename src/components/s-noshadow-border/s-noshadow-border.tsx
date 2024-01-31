import { Component, h } from '@stencil/core';

@Component({
  tag: 's-noshadow-border',
  shadow: false,
})
export class SNoShadowBorder {
  render() {
    return (
      <div style={{ border: '1px solid blue' }}>
        <p>this parent component is no shadow</p>
        <slot></slot>
      </div>
    );
  }
}
