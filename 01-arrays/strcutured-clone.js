console.log("Hola Mundo Dani");

const superHeros = [
    "Dani",
{
    id: 1,
    name: "Batman",
},
{
    id: 2,
    name: "Superman",
},
{
    id: 3,
    name: "Spiderman",
},
{
    id: 4,
    name: "Aquiaman",
},
 ]

 const superHeroCopy2 = JSON.parse(JSON.stringify(superHeros));
 console.log("superhero copy 2 caule is ",superHeroCopy2);

 const superHeroCopy = structuredClone(superHeros);
 superHeroCopy[0] = 'Dr Strange';
 console.log(superHeroCopy);
console.table(superHeros )