//import libraries
import * as React from 'react'
import { Text, View } from 'react-native';
//make components


export interface Props { }
export interface State { }

export class Header extends React.Component<Props, State>
{
    render()
    {
            return (
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Albums</Text>
                </View>
            );
    }
}

const styles = {
    textStyle: {
        fontSize : 50
    }, 
    viewStyle:{
        backgroundColor: '#4286f4'
    }
}
