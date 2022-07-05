import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

// const App = () => {
//   const [pokemon, setPokemon] = useState([""]);
//   const [pokemonData, setPokemonData] = useState([""]);
//   const [userInput, setUserInput] = useState();
//   const [userPokemonSearched, setuserPokemonSearched] = useState({}); //aqui guardo la información del pokemon por busqueda

//   fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
//     .then((res) => res.json())
//     .then((data) => {
//       setPokemon(() => data.results);
//     });

//   const searchButton = (input) => {
//     setUserInput(input);
//     fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
//       .then((res) => res.json())
//       .then((data) =>
//         setuserPokemonSearched({
//           name: data.species.name,
//           img: data.sprites.front_default,
//           hp: data.stats[0].base_stat,
//           attack: data.stats[1].base_stat,
//           defense: data.stats[2].base_stat,
//           type: data.types[0].type.name,
//         })
//       );
//   };

//   return (
//     <div>
//       <div>
//         Buscador:
//         <input
//           value={userInput}
//           type="text"
//           placeholder="hi"
//           onChange={(e) => searchButton(e.target.value)}
//         />
//         <button onClick={(e) => searchButton(e.target.event)}>Seach</button>
//         <div>
//           <div>Name: {userPokemonSearched.name}</div>
//           <div>HP: {userPokemonSearched.hp}</div>
//           <div>Attack: {userPokemonSearched.attack}</div>
//           <div>Defense: {userPokemonSearched.defense}</div>
//           <div>Type: {userPokemonSearched.type}</div>
//         </div>
//       </div>

//       <div>
//         <ul>
//           {pokemon.map((pokemon) => (
//             <li>{pokemon.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [userSearch, setUserSearch] = useState("");
  const [userInput, setUserInput] = useState("");

  const apiUsers = (input) => {
    setUserInput(input);
    fetch(`https://api.github.com/users/${userInput}`)
      .then((response) => response.json())
      .then((data) => setUserSearch(data));
  };
  return (
    <div>
      <div>Case Study</div>

      <text>Search:</text>
      <input
        placeholder="Search an user"
        value={userInput}
        onChange={() => apiUsers()}
      />
      <ul>
        <li>
          <input type="radio" />
          <label>Example 1</label>
        </li>
        <li>
          <input type="radio" />
          <label>Example 2</label>
        </li>
        <li>
          <input type="radio" />
          <label>Example 3</label>
        </li>
        <li>
          <input type="radio" />
          <label>Example 4</label>
        </li>
        <li>
          <input type="radio" />
          <label>Example 5</label>
        </li>
      </ul>
      <button onClick={(e) => apiUsers(e.target.value)}>Submit Button</button>
      <div>resultados aqui</div>
    </div>
  );
};

export default App;
