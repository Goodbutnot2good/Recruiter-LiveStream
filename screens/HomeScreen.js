import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> You are at Home Screen</Text>
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
                <Button
                title="Go to Instruction"
                onPress={() =>
                    navigate('Instruction')
                }
                />
            </View>
      );
    }
}