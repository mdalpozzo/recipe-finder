import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    HomeContainer: {
        flex: 1,
        backgroundColor: '#ececec',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 100,
        width: '100%',
    },
    scrollView: {
        width: '100%',
    },
    keyboardAvoidingView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        textAlign: 'center',
        marginBottom: 30,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbffc2',
    },
    inputSectionTitle: {
        marginBottom: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ingredientInput: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    addIngredientButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#8cb8ff',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    addIngredientButtonPlus: {
        fontSize: 40,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    searchForRecipesButton: {
        backgroundColor: 'blue',
        height: 30,
        width: 200,
        borderRadius: 15,
        justifyContent: 'center',
    },
    searchForRecipesButtonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
    recipeResultsListContainer: {
        width: '100%',
    },
    recipeCard: {
        flexDirection: 'row',
        minHeight: 100,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: .3,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: 10,
    },
    recipeCardImage: {
        width: 150,
        height: '100%',
        resizeMode: 'cover',
    },
    recipeCardInfo: {
        flex: 2,
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 10,
    },
    recipeCardTitle: {
        fontWeight: 'bold',
    },
    recipeCardDescription: {

    },
});