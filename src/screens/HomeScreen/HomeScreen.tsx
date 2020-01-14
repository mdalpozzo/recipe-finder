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
    Image,
} from 'react-native';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
    SafeAreaView,
    ScrollView,
} from 'react-navigation';
import styles from './styles';
import { Recipe } from '@Models/Recipe';

import recipes from '@Data/recipes';
import { get } from 'lodash';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    [index: string]: string | number| Recipe[];
    numberOfIngredients: number;
    inputFocus: number;
    recipes: Recipe[];
};

export class HomeScreen extends React.PureComponent<Props, State> {
    private _inputRefMap: Record<string, TextInput> = {};

    public constructor(props: Props) {
        super(props);
        this.state = {
            inputFocus: 0,
            numberOfIngredients: 1,
            recipes: [],
        };
    }

    private addIngredientInput = () => {
        this.setState({
            numberOfIngredients: this.state.numberOfIngredients + 1,
        });
    };

    private removeIngredientInput = () => {
        this.setState({
            numberOfIngredients: this.state.numberOfIngredients - 1,
        })
    };

    private onTextChange = (ingredientNumber: number) => (text: string) => {
        if (!text.match(/[^\s\\]/)) {
            this.setState({
                [`ingredient${ingredientNumber}` ]: '',
             });
            return;
        }
        if (!this.state[`ingredient${ingredientNumber}`] && text) {
            this.addIngredientInput();
        } else if (this.state[`ingredient${ingredientNumber}`] && !text) {
            this.removeIngredientInput();
        }
        this.setState({
           [`ingredient${ingredientNumber}` ]: text,
        });
    };

    private onSubmitEditing = (ingredientNumber: number) => (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        this.setState({
            inputFocus: ingredientNumber + 1,
        }, () => {
            if (this._inputRefMap[ingredientNumber + 1]) {
                this._inputRefMap[ingredientNumber + 1].focus();
            }
        });
    };

    private renderInputs = (numberOfInputs: number) => {
        let inputs: React.ReactElement[] = [];
        for (let i = 1; i <= numberOfInputs; i++) {
            if (i !== 0 && this.state[`ingredient${i - 1}`]) {
                inputs.push(
                    <View style={styles.inputWrapper} key={i}>
                        <TextInput
                            style={styles.ingredientInput}
                            onChangeText={this.onTextChange(i)}
                            value={this.state[`ingredient${i}`] as string}
                            returnKeyType="next"
                            // blurOnSubmit={false}
                            onSubmitEditing={this.onSubmitEditing(i)}
                            ref={(ref) => { ref ? this._inputRefMap[i] = ref : null}}
                        />
                    </View>
                );
            }
        }
        return inputs;
    };

    private handleOnPressRecipeSearch = () => {
        this.setState({
            recipes: recipes,
        });
    };

    public render(): React.ReactElement {
        return (
            <SafeAreaView style={styles.HomeContainer}>
                <KeyboardAvoidingView style={styles.keyboardAvoidingView} {...Platform.OS === 'ios' ? {behavior: 'height'} : null}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.header}>what ingredients do you have?</Text>
                        {/* <Text style={styles.inputSectionTitle}>Ingredients:</Text> */}
                        <View style={styles.inputWrapper} key={0}>
                            <TextInput
                                style={styles.ingredientInput}
                                onChangeText={this.onTextChange(0)}
                                value={this.state[`ingredient${0}`] as string}
                                returnKeyType="next"
                                autoFocus={true}
                                // blurOnSubmit={false}
                                onSubmitEditing={this.onSubmitEditing(0)}
                                ref={(ref) => { ref ? this._inputRefMap[0] = ref : null}}
                            />
                        </View>
                        {
                            this.renderInputs(this.state.numberOfIngredients)
                        }
                    </ScrollView>
                    <TouchableOpacity onPress={this.handleOnPressRecipeSearch}>
                        <View style={styles.searchForRecipesButton}>
                            <Text style={styles.searchForRecipesButtonText}>Search for Recipes!</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                {/* <View style={{borderBottomColor: '#aaa', borderBottomWidth: 2, height: 10, width: '100%'}}/> */}
                <View style={styles.recipeResultsListContainer}>
                    {
                        this.state.recipes.map((recipe, index) => {
                            return (
                                <TouchableOpacity
                                    style={styles.recipeCard}
                                    onPress={() => this.props.navigation.navigate('RecipeScreen', {recipe})}
                                    key={index}
                                >
                                    <Image
                                        style={styles.recipeCardImage}
                                        source={get(recipe, 'images[0]')}
                                    />
                                    <View style={styles.recipeCardInfo}>
                                        <Text style={styles.recipeCardTitle}>{recipe.name}</Text>
                                        <Text
                                            style={styles.recipeCardDescription}
                                            numberOfLines={4}
                                        >{recipe.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </SafeAreaView>
        )
    }
}

export default HomeScreen;