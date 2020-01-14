import {Recipe} from '@Models/Recipe';

const recipes: Recipe[] = [
    {
        name: 'Lentil Soup',
        description: 'Aromatic and hearty!  Filled with delicious, healthy vegetables and guaranteed to warm up those chilly winter nights!',
        images: [require('@Src/assets/images/lentil-soup.jpg')],
        preparationTime: 30,
        cookTime: 45,
        ingredients: [
            {
                name: 'olive oil',
                quantity: 2,
                metric: 'tablespoon',
            },
            {
                name: 'onion',
                quantity: 1,
                metric: 'cup',
                preparation: 'finely chopped',
            },
            {
                name: 'carrot',
                quantity: 0.5,
                metric: 'cup',
                preparation: 'finely chopped',
            },
            {
                name: 'celery',
                quantity: 0.5,
                metric: 'cup',
                preparation: 'finely chopped',
            },
            {
                name: 'salt',
                quantity: 2,
                metric: 'tablespoon',
            },
            {
                name: 'lentils',
                quantity: 1,
                metric: 'lb',
                preparation: 'picked and rinsed',
            },
            {
                name: 'tomato',
                quantity: 1,
                metric: 'cup',
                preparation: 'peeled and chopped',
            },
            {
                name: 'chicken broth',
                alternatives: 'vegetable broth',
                quantity: 2,
                metric: 'quart',
            },
            {
                name: 'coriander',
                quantity: 0.5,
                metric: 'teaspoon',
                preparation: 'freshly ground',
            },
            {
                name: 'cumin',
                quantity: 0.5,
                metric: 'teaspoon',
                preparation: ['toasted', 'freshly ground'],
            },
            {
                name: 'grains of paradise',
                quantity: 0.5,
                metric: 'teaspoon',
                preparation: 'freshly ground',
            },
        ],
        directions: [
            'Place the olive oil into a large 6-quart Dutch oven and set over medium heat.',
            'Once hot, add the onion, carrot, celery and salt and sweat until the onions are translucent, approximately 6 to 7 minutes.',
            'Add the lentils, tomatoes, broth, coriander, cumin and grains of paradise and stir to combine.',
            'Increase the heat to high and bring just to a boil.',
            'Reduce the heat to low, cover and cook at a low simmer until the lentils are tender, approximately 35 to 40 minutes.',
            'Using a stick blender, puree to your preferred consistency. Serve immediately.',
        ],
    },
    {
        name: 'Tomato Soup',
        description: 'Yum!',
        images: [require('@Src/assets/images/tomato-soup.jpg')],
        preparationTime: 30,
        cookTime: 45,
        ingredients: [
            {
                name: 'olive oil',
                quantity: 2,
                metric: 'tablespoon',
            },
            {
                name: 'onion',
                quantity: 1,
                metric: 'cup',
                preparation: 'finely chopped',
            },
            {
                name: 'carrot',
                quantity: 0.5,
                metric: 'cup',
                preparation: 'finely chopped',
            },
            {
                name: 'celery',
                quantity: 0.5,
                metric: 'cup',
                preparation: 'finely chopped',
            },
            {
                name: 'salt',
                quantity: 2,
                metric: 'tablespoon',
            },
            {
                name: 'lentils',
                quantity: 1,
                metric: 'lb',
                preparation: 'picked and rinsed',
            },
            {
                name: 'tomato',
                quantity: 1,
                metric: 'cup',
                preparation: 'peeled and chopped',
            },
            {
                name: 'chicken broth',
                alternatives: 'vegetable broth',
                quantity: 2,
                metric: 'quart',
            },
            {
                name: 'coriander',
                quantity: 0.5,
                metric: 'teaspoon',
                preparation: 'freshly ground',
            },
            {
                name: 'cumin',
                quantity: 0.5,
                metric: 'teaspoon',
                preparation: ['toasted', 'freshly ground'],
            },
            {
                name: 'grains of paradise',
                quantity: 0.5,
                metric: 'teaspoon',
                preparation: 'freshly ground',
            },
        ],
        directions: [
            'Place the olive oil into a large 6-quart Dutch oven and set over medium heat.',
            'Once hot, add the onion, carrot, celery and salt and sweat until the onions are translucent, approximately 6 to 7 minutes.',
            'Add the lentils, tomatoes, broth, coriander, cumin and grains of paradise and stir to combine.',
            'Increase the heat to high and bring just to a boil.',
            'Reduce the heat to low, cover and cook at a low simmer until the lentils are tender, approximately 35 to 40 minutes.',
            'Using a stick blender, puree to your preferred consistency. Serve immediately.',
        ],
    },
];

export default recipes;