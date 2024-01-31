import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-noshadow-test',
  extras:{
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true
  },
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false
    },
  ]
};
