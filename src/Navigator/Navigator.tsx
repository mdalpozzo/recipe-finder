import {
    createAppContainer,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '@Screens/Home';
import TestScreen from '@Screens/TestScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    TestScreen: {
        screen: TestScreen,
    }
},
{
    initialRouteName: 'Home',
});

export default createAppContainer(RootStack);