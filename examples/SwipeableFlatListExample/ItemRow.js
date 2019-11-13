import React from 'react';
import { View, Text } from 'react-native';

const ItemRow = item => {
    return(
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}