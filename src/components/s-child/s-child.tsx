import { Component, h } from '@stencil/core';

@Component({
  tag: 's-child',
  shadow: true,
})
export class SChild {
  // The case can see easier when there is some functionality like this
  connectedCallback() {
    console.log('s-child:connectedCallback');
  }
  disconnectedCallback() {
    console.log('s-child:disconnectedCallback');
  }
  componentWillLoad() {
    console.log('s-child:componentWillLoad');
  }
  componentDidLoad() {
    console.log('s-child:componentDidLoad');
  }
  componentWillRender() {
    console.log('s-child:componentWillRender');
  }
  componentDidRender() {
    console.log('s-child:componentDidRender');
  }
  componentWillUpdate() {
    console.log('s-child:componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('s-child:componentDidUpdate');
  }

  render() {
    return <span style={{ border: '1px solid green', padding: '0.1px' }}>child</span>;
  }
}
