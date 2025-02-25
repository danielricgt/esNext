console.log("Hola Mundo Dani");

const state = [
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
 ];
 const index = 1;
 const newName = "Green Lantern";

//  const newState = state.map((hero,i) => {
//     if (i === index) {
//         hero.name = newName;
//     }
//     return {...hero};
//  });

 const newStateTwo = state.with(index, { 
    ...state.at(index),
    name: newName
 });
 state[0].name= "Volcan Negro";
 console.table(newStateTwo);

 console.log("el ultimo hero es: ", state.at(-1 ));