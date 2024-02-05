import { Component, h } from '@stencil/core';

@Component({
  tag: 's-noshadow-border',
  shadow: false,
})
export class SNoShadowBorder {
  connectedCallback() {
    console.log('s-noshadow-border:connectedCallback');
  }
  disconnectedCallback() {
    console.log('s-noshadow-border:disconnectedCallback');
  }
  componentWillLoad() {
    console.log('s-noshadow-border:componentWillLoad');
  }
  componentDidLoad() {
    console.log('s-noshadow-border:componentDidLoad');
  }
  componentWillRender() {
    console.log('s-noshadow-border:componentWillRender');
  }
  componentDidRender() {
    console.log('s-noshadow-border:componentDidRender');
  }
  componentWillUpdate() {
    console.log('s-noshadow-border:componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('s-noshadow-border:componentDidUpdate');
  }

  render() {
    return (
      <div style={{ border: '1px solid blue' }}>
        <p>this parent component is no shadow</p>
        <slot></slot>
        <p>Child elements must be located higher than this.</p>
      </div>
    );
  }
}
