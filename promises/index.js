`
Progression:
1. Write functions findRecipe(), buy(), and mix() with Promises.
2. Use them all together with LEVEL ONE implementation.
3. Refactor from LEVEL ONE to LEVEL TWO to LEVEL THREE to async/await.
4. See how the catch blocks work by uncommenting the reject statements in the functions findRecipe(), buy(), and mix(), ideally such that only one is uncommented at any point in time.
`;

'LEVEL ONE';

// findRecipe().then(ingredients => {
//   console.log(ingredients); // [...] after 1 sec
//   buy(ingredients).then(purchasedIngredients => {
//     console.log(purchasedIngredients); // {...} after 1 sec
//     mix(purchasedIngredients).then(cakeBatter => {
//       console.log(cakeBatter); // '...' after 2 sec
//     }).catch(err => console.log(err));
//   }).catch(err => console.log(err));
// }).catch(err => console.log(err));

'LEVEL TWO';

// findRecipe().then(ingredients => {
//   console.log(ingredients);
//   return buy(ingredients);
// }).then(purchasedIngredients => {
//   console.log(purchasedIngredients);
//   return mix(purchasedIngredients);
// )}.then(cakeBatter => {
//   console.log(cakeBatter);
// }).catch(err => console.log(err));

'LEVEL THREE';

// findRecipe().then(buy)
//   .then(mix)
//   .then(cakeBatter => {
//     console.log(cakeBatter);
//   })
//   .catch(err => console.log(err));

'ASYNC/AWAIT';

// async function main() {
//   try {
//     const ingredients = await findRecipe();
//     console.log(ingredients)
//     const purchasedIngredients = await buy(ingredients);
//     console.log(purchasedIngredients)
//     const cakeBatter = await mix(purchasedIngredients);
//     console.log(cakeBatter);
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();


function findRecipe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['eggs', 'flour', 'butter', 'sugar']);
    }, 1000);
    // setTimeout(() => {
    //   reject('I COULDNT FIND THE RECIPE D:');
    // }, 500);
  });
}

function buy(ingredients) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shoppingCart = ingredients.reduce((shoppingCart, ingredient) => {
        shoppingCart[ingredient] = true;
        return shoppingCart;
      }, {});
      // { eggs: true, flour: true, butter: true }
      resolve(shoppingCart);
    }, 1000);
    // setTimeout(() => {
    //   reject('grocery store was closed :(');
    // }, 500);
  });
}

function mix(purchasedIngredients) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 'eggsflourbuttersugar'
      resolve(Object.keys(purchasedIngredients).join(''))
    }, 2000);
    // setTimeout(() => {
    //   reject('no mixing bowl :(')
    // }, 1000);
  });
}
