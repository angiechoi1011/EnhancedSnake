import React, { Component } from 'react';
import { View } from 'react-native';

import Score from './app/components/Score';
import Controls from './app/components/Controls';
import Proptypes from 'prop-types';

export default class App extends Component {
  render() {
    const emptyLambda = () => {};
    return (
      <View 
        style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        <Score value={130}/>
        <Controls
          moveUp={emptyLambda}
          moveDown={emptyLambda}
          moveLeft={emptyLambda}
          moveRight={emptyLambda}
        />
      </View>
    );
  }
}