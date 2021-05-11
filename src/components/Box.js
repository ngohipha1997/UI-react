
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state={
            count : 0,
        };
    }
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 30}}> Count : {this.state.count} </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity
          onPress={() =>{
              this.setState({count : this.state.count + 1 } , () => {
                  console.log(this.state.count)
              });
          }}
            style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
            <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
            <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: 'yellow', borderRadius: 5}}>
            <Text style={{fontSize: 20, color: 'gray'}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}