import {Ingredient} from '@Models/Ingredient';

export interface Recipe {
    name: string,
    description?: string,
    preparationTime?: number, // minutes
    cookTime: number, // minutes
    ingredients: Ingredient[],
    directions: string[],
    images?: string[],
    servings?: number,
    servingsMetric?: string,
}