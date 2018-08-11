import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default class QuestionScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> You are at Question Screen</Text>
                <Button
                title="Go to LiveStreamScreen"
                onPress={() =>
                    navigate('LiveStream')
                }
                />
                <Button
                title="Go to HomeScreen"
                onPress={() =>
                    navigate('Home')
                }
                />
                <Button
                title="Go to ListStreamScreen"
                onPress={() =>
                    navigate('ListStream')
                }
                />
                <Button
                title="Go to QuestionScreen"
                onPress={() =>
                    navigate('Question')
                }
                />
            </View>
        );
    }
  }