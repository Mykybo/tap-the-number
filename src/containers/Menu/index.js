import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tile from 'src/components/Tile';
import boardUtils from 'src/utils/boardUtils';
import styles from './index.style';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state= {
            tileColor: boardUtils.getRandomTileColor(),
        }
    }
    render() {
        const { tileColor } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Tile
                        backgroundColor={tileColor}
                        text={'Play'}
                        onPressOut={()=>console.log('Thanks Button Press')}
                        style={styles.button}
                        textStyle={styles.buttonText}
                        singlePressOnly
                     />
                    <Tile
                        backgroundColor={tileColor}
                        text={'Help'}
                        onPressOut={()=>console.log('Help Button Press')}
                        style={styles.button}
                        textStyle={styles.buttonText}
                        singlePressOnly
                     />
                    <Tile
                        backgroundColor={tileColor}
                        text={'Invite'}
                        onPressOut={()=>console.log('Invite Button Press')}
                        style={styles.button}
                        textStyle={styles.buttonText}
                        singlePressOnly
                     />
                     
                     <Tile
                        backgroundColor={tileColor}
                        text={'Thanks'}
                        onPressOut={()=>console.log('Thanks Button Press')}
                        style={styles.button}
                        textStyle={styles.buttonText}
                        singlePressOnly
                     />

                     
                </View>
            </View>
        );
    }
}

export default Menu;