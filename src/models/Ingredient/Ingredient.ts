export interface Ingredient {
    name: string,
    alternatives?: string,
    quantity: number,
    metric: string,
    preparation?: string | string[],
}