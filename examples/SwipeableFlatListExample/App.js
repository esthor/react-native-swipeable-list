import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeableFlatList from 'react-native-swipeable-list';
import ItemRow from './ItemRow';

import {dummyData} from './data/dummyData';

const extractItemKey = item => {
  return item.id.toString();
};

function Item({item}) {
  return (
    <>
      <View style={styles.item}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#9eb5e6',
            marginRight: 7,
            marginLeft: 3,
            marginTop: 2,
          }}
        />
        <View style={styles.messageContainer}>
          <View style={{maxWidth: 300}}>
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
      </View>
      <View />
    </>
  );
}

function renderItemSeparator() {
  return <View style={{height: 10}} />;
}

function QuickActions({item}) {
  return (
    <View style={styles.qaContainer}>
      {/* <View style={styles.qaContainer}> */}
      <View style={[styles.button, styles.button1]}>
        <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
      </View>
      {/* </View> */}
      {/* <View style={styles.qaContainer}> */}
      <View style={[styles.button, styles.button2]}>
        <Text style={[styles.buttonText, styles.button2Text]}>Snooze</Text>
      </View>
      {/* </View> */}
      {/* <View style={styles.qaContainer}> */}
      <View style={[styles.button, styles.button3]}>
        <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
        {/* </View> */}
      </View>
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>Inbox</Text>
        </View>
        <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={dummyData}
          renderItem={({item}) => <Item item={item} />}
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  item: {
    backgroundColor: '#E2EBFF',
    // backgroundColor: '#BFD2FF',
    height: 80,
    flexDirection: 'row',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 5
  },
  messageContainer: {},
  name: {
    fontSize: 16,
    color: '#100023',
    fontWeight: 'bold',
  },
  subject: {
    fontSize: 14,
    color: '#100023',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    color: '#100023',
  },
  itemSeparator: {
    height: 10,
    backgroundColor: '#333333',
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0.1,
  },
  button1: {
    backgroundColor: '#fbe2ff',
  },
  button2: {
    backgroundColor: '#ffeee2',
  },
  button3: {
    backgroundColor: '#fffde2',
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
  },
});

export default App;
