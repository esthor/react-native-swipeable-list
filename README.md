# react-native-swipeable-list

[![npm version](https://badge.fury.io/js/react-native-swipeable-list.svg)](https://badge.fury.io/js/react-native-swipeable-list)
![NPM](https://img.shields.io/npm/l/react-native-swipeable-list?color=31%2C191%2C31)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![Build status](https://build.appcenter.ms/v0.1/apps/13534511-14df-4ea0-b460-22eb6d84e8fe/branches/main/badge)](https://appcenter.ms)

A Swipeable FlatList for React-Native with Quick Actions &amp; Animations

![animated screenshot of a swipeable flatlist email inbox mockup using react-native-swipeable-list](images/react-native-swipeable-list-demo2.gif)

## Usage

1. Install the package in your project:

`npm install react-native-swipeable-list`

or

`yarn add react-native-swipeable-list`

2. Import the component into your component:

`import SwipeableFlatList from 'react-native-swipeable-list';`

3. Pass it a data array. It inherits [FlatListProps from the standard `FlatList` component from react-native](https://facebook.github.io/react-native/docs/flatlist).

It can be passed other props:

- `shouldBounceOnMount` (default = `true`) - To alert the user that swiping is possible, the first row can bounce on component mount. Type `boolean`

- `maxSwipeDistance` - Maximum distance to open to after a swipe. Type `number || (Object => number)`

- `renderQuickActions` - Callback method to render the view that will be unveiled on swipe. Type `renderItemType` (which provides `index` and  `item`, which will be very useful for performing actions on your items)

## Example

Check out the example in the `/examples` folder. Clone this repo, then `cd examples && yarn install && yarn start` and then either  `react-native run-ios` or `react-native run-android` to get the app up and running locally. Play with the code and see what you can do.

## History & Shoutouts

Started from the `SwipeableFlatList` component that was removed from react-native's experimental libraries. (See: https://github.com/facebook/react-native/commit/9ca7989f60cc8137705effeaad0f128fa73ed2e4)
