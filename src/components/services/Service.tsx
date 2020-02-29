import { DrinkShell } from './models/drink.model';
export class Service {
    simpleCall() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(res => res.json())
            .then(
                (result: DrinkShell) => {
                    console.log(result.drinks[0]);
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