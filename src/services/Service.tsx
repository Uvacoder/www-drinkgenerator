import { DrinkShell, DrinkShellSchema } from './models/drink.model';
import { ValidationError } from 'validate';

export class Service {

    baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

    CocktailByName(name: string) {
        fetch(`${this.baseUrl}/search.php?s=${name}`)
            .then(res => res.json())
            .then(
                (results: DrinkShell) => {
                    let validate: ValidationError[] = [];
                    validate = DrinkShellSchema.validate(results.drinks, { strip: false });
                    if (validate.length === 0) {
                        console.log(results.drinks)
                    } else {
                        console.error(validate);
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.error(error);
                }
            )
    }
}