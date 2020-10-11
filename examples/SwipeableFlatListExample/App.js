import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  useColorScheme,
  Pressable,
  Alert,
} from 'react-native';

import SwipeableFlatList from 'react-native-swipeable-list';
// import ItemRow from './ItemRow';

import {dummyData} from './data/dummyData';

const darkColors = {
  background: '#121212',
  primary: '#BB86FC',
  primary2: '#3700b3',
  secondary: '#03DAC6',
  onBackground: '#FFFFFF',
};
const colorEmphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const extractItemKey = item => {
  return item.id.toString();
};

function Item({item, backgroundColor, textColor, deleteItem}) {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.avatar} />
        <View style={styles.messageContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.subject} numberOfLines={1}>
            Subject: {item.subject}
          </Text>
          <Text style={styles.text} numberOfLines={2}>
            {item.text}
          </Text>
        </View>
      </View>
      <View />
    </>
  );
}

function renderItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

const App: () => React$Node = () => {
  // TODO: Should probably be using Context or some other wrapping/container solution for theme data calc/store/retrieve
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#E2EBFF' : '#333333';
  // const backgroundColor = colorScheme === 'dark' ? '#333333' : '#E2EBFF';
  const [data, setData] = useState(dummyData);

  const deleteItem = itemId => {
    const newState = data.filter(item => item.id !== itemId);
    return setData(...newState);
  };

  const QuickActions = ({itemQA}) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button, styles.button1]}>
          <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
        </View>
        <View style={[styles.button, styles.button2]}>
          <Text style={[styles.buttonText, styles.button2Text]}>Snooze</Text>
        </View>
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => Alert.alert('hello')}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerText, {color: textColor}]}>Inbox</Text>
        </View>
        <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={data}
          renderItem={({item}) => (
            <Item item={item} deleteItem={() => deleteItem} />
          )}
          maxSwipeDistance={240}
          renderQuickActions={QuickActions}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    color: darkColors.onBackground,
    opacity: colorEmphasis.high,
  },
  item: {
    backgroundColor: '#121212',
    height: 80,
    flexDirection: 'row',
    padding: 10,
  },
  messageContainer: {
    backgroundColor: darkColors.backgroundColor,
    maxWidth: 300,
  },
  name: {
    fontSize: 16,
    color: darkColors.primary,
    opacity: colorEmphasis.high,
    fontWeight: '800',
  },
  subject: {
    fontSize: 14,
    color: darkColors.onBackground,
    opacity: colorEmphasis.high,
    fontWeight: 'bold',
    textShadowColor: darkColors.secondary,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  text: {
    fontSize: 10,
    color: darkColors.onBackground,
    opacity: colorEmphasis.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: darkColors.onBackground,
    opacity: colorEmphasis.disabled,
    borderColor: darkColors.primary,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 7,
    alignSelf: 'center',
    shadowColor: darkColors.secondary,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: darkColors.onBackground,
    opacity: colorEmphasis.medium,
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginRight: 20,
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 0.1,
  },
  button1: {
    // backgroundColor: '#555555',
  },
  button2: {
    // backgroundColor: '#555555',
  },
  button3: {
    // backgroundColor: '#555555',
    // borderBottomRightRadius: 5,
    // borderTopRightRadius: 5,
  },
  buttonText: {
    color: '#9eb5e6',
    fontWeight: 'bold',
  },
  button1Text: {
    color: '#560061',
  },
  button2Text: {
    color: '#7A3100',
  },
  button3Text: {
    color: '#423900',
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: darkColors.backgroundColor,
  },
});

export default App;
