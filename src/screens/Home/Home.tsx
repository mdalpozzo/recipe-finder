import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';
import styles from './styles';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Home extends React.PureComponent<Props, {}> {

    private onPress = () => {
        this.props.navigation.navigate('TestScreen');
    }

    public render(): React.ReactElement {
        return (
            <View style={styles.HomeContainer}>
                <Text style={styles.header}>React-Native / Typescript Template</Text>
                <View style={styles.body}>
                    <Button title="To Test Screen" onPress={this.onPress} />
                </View>
            </View>
        )
    }
}

export default Home;