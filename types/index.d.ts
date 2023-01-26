import { FlatList } from "react-native/types";

interface SwipeableFlatList extends FlatList {
  shouldBounceOnMount: boolean;
  maxSwipeDistance: number;
  renderQuickActions: () => void;
}
