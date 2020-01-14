import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    ListRenderItemInfo,
    Image,
    ScrollView,
} from 'react-native';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
    SafeAreaView,
    FlatList,
} from 'react-navigation';
import styles from './styles';
import { Recipe } from '@Models/Recipe';
import { Ingredient } from '@Models/Ingredient';
import {get} from 'lodash';

import recipes from '@Data/recipes';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    recipe: Recipe;
};

export class RecipeScreen extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            recipe: this.props.navigation.getParam('recipe'),
        };
    }

    private renderIngredient = (ingredient: Ingredient, index: number): React.ReactElement => {
        return (
            <View style={styles.ingredientListItemContainer} key={index}>
                <Text>{ingredient.name}</Text>
                <Text style={styles.ingredientAmount}>
                    <Text>{ingredient.quantity} </Text>
                    <Text>{ingredient.metric}</Text>
                </Text>
            </View>
        );
    };

    private renderDirections = (step: string, index: number) => {
        return (
            <View style={styles.directionsListItemContainer} key={index + 1}>
                <Text style={styles.directionsStepNumber}>{index + 1}</Text>
                <Text style={styles.directionsStepText}>{step}</Text>
            </View>
        );
    };

    public render(): React.ReactElement {
        return (
                <ScrollView style={styles.RecipeContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.recipeName}>{this.state.recipe.name}</Text>
                    </View>

                    <Image
                        style={styles.heroImage}
                        source={get(this.state, 'recipe.images[0]')}
                    />

                    <View style={styles.body}>
                        <View style={styles.ingredientListContainer}>
                            <Text style={styles.ingredientListTitle}>Ingredients</Text>
                            {
                                this.state.recipe.ingredients.map(this.renderIngredient)
                            }
                        </View>
                        <View style={styles.directionsContainer}>
                            <Text style={styles.directionsTitle}>Cooking Instructions</Text>
                            <View>
                                {
                                    this.state.recipe.directions.map(this.renderDirections)
                                }
                            </View>
                        </View>
                    </View>

                </ScrollView>
        );
    }
}

export default RecipeScreen;