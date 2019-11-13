# react-native-swipeable-list

[![npm version](https://badge.fury.io/js/react-native-swipeable-list.svg)](https://badge.fury.io/js/react-native-swipeable-list)
![NPM](https://img.shields.io/npm/l/react-native-swipeable-list?color=31%2C191%2C31)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A Swipeable FlatList for React-Native with Quick Actions &amp; Animations

Started from the `SwipeableFlatList` component that was removed from react-native's experimental libraries. (See: https://github.com/facebook/react-native/commit/9ca7989f60cc8137705effeaad0f128fa73ed2e4)

## Usage

1. Install the package in your project:

`npm install react-native-swipeable-flatlist`

or

`yarn add react-native-swipeable-flatlist`


2. Import the component into your component:

`import SwipeableFlatList from 'react-native-swipeable-list';`


3. Pass it a data array. It inherits FlatListProps from the standard `FlatList` component from react-native.

It can be passed other props:

    - To alert the user that swiping is possible, the first row can bounce on component mount.
    ```bounceFirstRowOnMount: boolean```

    `maxSwipeDistance`

    `renderQuickActions`

    - Maximum distance to open to after a swipe
    ```maxSwipeDistance: number || (Object => number)```

    - Callback method to render the view that will be unveiled on swipe
    ```renderQuickActions: renderItemType```

## Example

Check out the example in the `/examples` folder. Clone this repo, then `cd examples && yarn install && yarn start` and then either  `react-native run-ios` or `react-native run-android` to get the app up and running locally. Play with the code and see what you can do.
