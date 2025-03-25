const heroes = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Spider-Man',
]

// heroes.sort();


const deleteHero = heroes.toSpliced(0,2, "Dr Strange");
// const reverseHeroes = heroes.toReversed();
// const heroesCopy = heroes;
// const heroesSorted = heroes.toSorted();

// console.log("ti amo");
console.table(heroes);
// console.table(heroesSorted ); // heroesCopy is not sorted
// console.table(reverseHeroes);
console.table(deleteHero);
