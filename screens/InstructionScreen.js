import React, { Component } from 'react'
import { Container, Header,List, View, Form, Label, Input, ListItem, Item, Text, Button } from 'native-base';


export default class InstructionScreen extends Component {
    render() {
        /*const { navigate } = this.props.navigation;*/
        return (
            <Container>
                <List>
                    <ListItem>
                      <Text onPress={()=> Linking.openURL('https://www.youtube.com/account') }>Sign up to YouTube Account</Text>
                    </ListItem>
                    <ListItem>
                      <Text onPress={()=> Linking.openURL('https://www.youtube.com/account') }>Set up your livestream in Youtube</Text>
                    </ListItem>
              </List>
                <Form>
                    <Item fixedLabel>
                      <Label>Youtube Streaming Link</Label>
                      <Input placeholder="Livestream Link" />
                    </Item>
                </Form>
            </Container>
      );
    }
}

