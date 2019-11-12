# react-native-swipeable-list

A Swipeable FlatList for React-Native with Quick Actions &amp; Animations

Started from the `SwipeableFlatList` component that was removed from react-native's experimental libraries. (See: https://github.com/facebook/react-native/commit/9ca7989f60cc8137705effeaad0f128fa73ed2e4)

## Usage

`import SwipeableFlatList from 'react-native-swipeable-list';`

Pass it a data array. It inherits FlatListProps from the standard `FlatList` component from react-native.

It can be passed other props:

    - To alert the user that swiping is possible, the first row can bounce on component mount.
    ```bounceFirstRowOnMount: boolean```

    `maxSwipeDistance`

    `renderQuickActions`

    - Maximum distance to open to after a swipe
    ```maxSwipeDistance: number || (Object => number)```

    - Callback method to render the view that will be unveiled on swipe
    ```renderQuickActions: renderItemType```
