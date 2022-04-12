# What's New component for react

> Show new features

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/paraboly/react-apexcharts-dynamic-config/graphs/commit-activity)
[![NPM](https://img.shields.io/npm/v/@paraboly/react-apexcharts-dynamic-config.svg)](https://www.npmjs.com/package/@schemesonic/whats-new) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed06153b-5f15-4305-b897-22ed648b95ae/deploy-status)](https://app.netlify.com/sites/react-whats-new/deploys)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Demo

| Announcements                                                                |                              Announcement Details                               |
| ---------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: |
| <img src="./img/sidepanel.png" alt="Announcements" style="max-height: 500px"> | <img src="./img/modal.png" alt="Announcement Details" style="max-height: 500px"> |

> https://react-whats-new.netlify.app

---

## Install

```bash
npm install --save @paraboly/react-apexcharts-dynamic-config
```

---

## Usage

```tsx
import React from 'react';
import ReactNpmStarter from '@schemesonic/react-npm-starter';

const example = (): JSX.Element => {
  const options = { someProps: [] };

  return <ReactNpmStarter prop={options} onChange={opt => console.log(opt)} />;
};

export default example;
```

## Details

| Props    |        Definition         |                         Type | Default | Required |
| -------- | :-----------------------: | ---------------------------: | ------: | -------: |
| prop     |       Example prop        |                       `Prop` |    null |     true |
| onChange | Example callback function | `(updatedOpt: Prop) => void` |    null |     true |

---

## Licence

[MIT](./LICENSE) License © [SchemeSonic](https://github.com/jaredpalmer/tsdx)
