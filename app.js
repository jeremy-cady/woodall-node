let food = require('./food');

console.log('Hello from app.js');

let people = [
    'Edan',
    'Sabrina',
    'Subash',
    'Ken'
];

for(person of people) {
    console.log(`Hello ${person}`);

    if(person==='Edan') {
        console.log('Looking good!');
        
    }
    
}

console.log('all the people: ', people);
console.log('all the foods', food);


