import * as React from 'react';
import {View, Text} from 'react-native';

export class Home extends React.PureComponent<{}, {}> {
    public render(): React.ReactElement {
        return (
            <View>
                <Text>Test Screen</Text>
            </View>
        )
    }
}

export default Home;