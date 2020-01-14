import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    RecipeContainer: {
        flex: 1,
        backgroundColor: '#ececec',
        paddingTop: 20,
    },
    titleContainer: {
        paddingHorizontal: 20,
    },
    recipeName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    heroImage: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    ingredientListTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    body: {
        paddingHorizontal: 20,
    },
    ingredientListContainer: {
        marginBottom: 20,
    },
    ingredientListItemContainer: {
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1,
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ingredientAmount: {
        fontWeight: 'bold',
    },
    directionsContainer: {

    },
    directionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    directionsListItemContainer: {
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: .3,
        shadowRadius: 1,
        elevation: 1,
        paddingVertical: 5,
        paddingRight: 10,
        flexDirection: 'row',
    },
    directionsStepNumber: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 30,
    },
    directionsStepText: {
        flex: 8,
        lineHeight: 30,
    },
});