/// <reference types="node" />
/// <reference types="react"/>
/// <reference types="react-native"/>

declare module 'react-native-swipeable-list' {
  import React from 'react';
  import {FlatListProps} from 'react-native';

  interface SwipeableFlatListProps<ItemT> extends FlatListProps<ItemT> {
    maxSwipeDistance?: number;
    shouldBounceOnMount?: boolean;
    renderQuickActions?: (props: {
      index: number;
      item: ItemT;
    }) => React.ReactNode;
  }
  export default class SwipeableFlatList<ItemT> extends React.Component<
    SwipeableFlatListProps<ItemT>
  > {}
}

export = SwipeableFlatList;
