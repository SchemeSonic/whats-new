# What's New component for react

> Show new features 

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/paraboly/react-apexcharts-dynamic-config/graphs/commit-activity)
[![NPM](https://img.shields.io/npm/v/@paraboly/react-apexcharts-dynamic-config.svg)](https://www.npmjs.com/package/@schemesonice/whats-new) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed06153b-5f15-4305-b897-22ed648b95ae/deploy-status)](https://app.netlify.com/sites/react-whats-new/deploys)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)


| Example 1                                                                                                                 |                                                         Example 2                                                         |                                                         Example 3                                                         |
| ------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
| ![alt text](https://raw.githubusercontent.com/Paraboly/react-apexcharts-dynamic-config/main/example/assets/example_1.png) | ![alt text](https://raw.githubusercontent.com/Paraboly/react-apexcharts-dynamic-config/main/example/assets/example_2.png) | ![alt text](https://raw.githubusercontent.com/Paraboly/react-apexcharts-dynamic-config/main/example/assets/example_3.png) |

## Demo

> https://react-apexcharts-dynamic-config.netlify.app

## Install

```bash
npm install --save @paraboly/react-apexcharts-dynamic-config
```

## Usage

```tsx
import React from 'react';
import ReactApexDynamicConfig from '@paraboly/react-apexcharts-dynamic-config';

const example = (): React.ReactElement => {
  //ApexCharts.ApexOptions
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Chart Title',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
      position: 'bottom',
    },
  };

  return (
    <ReactApexDynamicConfig
      options={options}
      onChange={(opt) => console.log(opt)}
    />
  );
};

export default example;
```

## Details

| Props        |          Definition          |                                           Type |              Default | Required |
| ------------ | :--------------------------: | ---------------------------------------------: | -------------------: | -------: |
| options      |  Initial apex chart options  |                       `ApexCharts.ApexOptions` |                 null |     true |
| translations | Translations key value pair  |                       `Record<string, string>` | DEFAULT_TRANSLATIONS |    false |
| onChange     | Callback for updated options | `(updatedOpt: ApexCharts.ApexOptions) => void` |                 null |     true |

DEFAULT_TRANSLATIONS

```json
{
  "reset": "Reset",
  "show": "Show",
  "hide": "Hide",
  "none": "None",
  "number": "Number",
  "percent": "Percent",
  "all": "All",
  "top": "Top",
  "right": "Right",
  "bottom": "Bottom",
  "left": "Left",
  "xaxis": "X-Axis",
  "yaxis": "Y-Axis",
  "legendPosition": "Legend Position",
  "titleVisibility": "Title Visibility",
  "fontSize": "FontSize",
  "axisLabelSize": "Axis Label Size",
  "dataLabels": "Data Labels"
}
```

## License

MIT © [SchemeSonic](https://github.com/SchemeSonic)
