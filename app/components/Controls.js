import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';


export default class Controls extends Component {
    static propTypes = {
        moveUp: PropTypes.func.isRequired,
        moveDown: PropTypes.func.isRequired,
        moveLeft: PropTypes.func.isRequired,
        moveRight: PropTypes.func.isRequired,
    }
    render() {
        const { moveUp, moveDown, moveLeft, moveRight } =this.props;
        return (
            <View>
                <TouchableOpacity onPress={moveUp}>
                    <Text style={{ fontSize: 150}}>
                        ▲
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={moveLeft}>
                    <Text style={{ fontSize: 150}}>
                        ◀
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={moveRight}>
                    <Text style={{ fontSize: 150}}>
                        ▶
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={moveDown}>
                    <Text style={{ fontSize: 150}}>
                        ▼
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}