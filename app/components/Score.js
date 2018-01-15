import React, {Component} from 'react';
import { 
    Text, 
    View,
} from 'react-native';
import PropTypes from 'prop-types';


export default class Score extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired, 
    }
    render() {
        return (
            <View>
                <Text>
                    Score: 
                </Text>
                <Text>
                    {this.props.value}
                </Text>
            </View>
        );
    }
}