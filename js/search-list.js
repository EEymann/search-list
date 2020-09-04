const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

/** Use the logical not operator (!) in the condition to check if the value
assigned to the search variable is falsy, such as a blank entry. **/

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search.toLowerCase())) { // toLowerCase ensures statement evaluates to true even if the user types capital letters.
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLocaleLowerCase()) + 1 } on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;
