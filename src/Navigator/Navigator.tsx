import {
    createAppContainer,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '@Screens/HomeScreen';
import RecipeScreen from '@Screens/RecipeScreen';

const RootStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    RecipeScreen: {
        screen: RecipeScreen,
    }
},
{
    // initialRouteName: 'RecipeScreen',
    initialRouteName: 'HomeScreen',
});

export default createAppContainer(RootStack);