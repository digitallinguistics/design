---
title: DLx Design System
---

The design system and pattern library for DLx projects.

DLx projects should import the following resets and global styles, followed by any specific components that are needed, and then styling for body (most likely following the same `body` style declarations as below).

```less
// CSS reset
@import 'node_modules/flexbox-reset/flexbox-reset.less';

// Global variables
@import 'global/colors.less';
@import 'global/spacing.less';
@import 'global/fonts.less';
@import 'global/typography.less';
@import 'global/utilities.less';
@import 'global/borders.less';

// Components
@import 'footer.less';
// etc.

body {
  font-family: var(--font);
  line-height: 1.5;
}
```
