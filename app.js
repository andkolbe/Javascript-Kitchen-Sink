
const myName = 'Andrew';
const numberOfStates = 50;

let val = myName + numberOfStates;


function sayHello() {
    alert('Hello World!')
};
sayHello();



function checkAge (name, age) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    }  
};
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);



let favoriteVegetables = ['mustard greens', 'kohlrabi', 'corn', 'matsutake', 'gai lan'];
for(let i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
};

let pet = {
    name: 'Odin',
    breed: 'mutt'
    
};
console.log(pet.name, pet.breed);



let people = [
    { name: 'Billy', age: 16 },
    { name: 'Bob', age: 24},
    { name: 'Johnson', age: 44},
    { name: 'Larry', age: 4},
    { name: 'Peggy Su', age: 112}
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}


function getLength(anyWord) {
    return (anyWord.length);
}

let word = getLength('Hello World');

if (word % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!' );
};















