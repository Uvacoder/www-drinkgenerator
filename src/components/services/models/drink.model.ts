import Schema from 'validate';

const DrinkSchema = new Schema({
    idDrink: {
        type: String,
        required: true
    },
    strDrink: {
        type: String,
        required: true
    },
    strTags: {
        type: String,
        required: true
    },
    strCategory: {
        type: String,
        required: true
    },
    strIBA: {
        type: String,
        required: true
    },
    strDrinkThumb: {
        type: String,
        required: true
    },
    strAlcoholic: {
        type: String,
        required: true
    },
    strInstructions: {
        type: String,
        required: true
    },
});

export const DrinkShellSchema = new Schema({
    drinks: [DrinkSchema]
});

export interface DrinkShell {
    drinks: Drink[]
}

interface Drink {
    idDrink: string;
    strDrink: string;
    strTags: string;
    strCategory: string;
    strIBA: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strInstructions: string;
}