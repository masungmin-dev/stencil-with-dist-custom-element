# Stencil Component with dist-custom-element, noshadow mode

## Script alias

### npm run dev
`npm run dev`

Stencil component will build as `dist-custom-element` and re-bundle by webpack for this use case


## Main issue
There is a child component responsible for rendering a span element, and a parent component that draws a border with the `shadow` option set to false

When the parent component has shadow set to false, the child web component or HTMLElement will not be placed exactly where we want it.

The summarized environment where the issue occurs is as follows:

- When using a Stencil component built with dist-custom-element and bundled, `only when the shadow: false` option is set.
- The issue tends to occur in fewer instances when child components have more tasks, and it becomes more noticeable with a higher number of instances. If the project utilizes Chrome Dev Console, the occurrence is even more prominent.
- The issue is consistent across both stencil@2 and stencil@4.12.0 versions.
- It consistently reproduces in the latest versions of Chrome and Edge on both macOS and Windows.
- During testing, the problem was not observed in the latest versions of Safari and Firefox.

As you can see here, some of the child components inserted into the slot of the parent component with shadow:false are rendered outside the border.

![Jan-31-2024 13-49-52](https://github.com/masungmin-dev/stencil-with-dist-custom-element/assets/24363683/848f0a63-6af7-4a1d-b293-ee8424754dcb)


