import React from "react";
import { useState } from "react";
import ScreenLayout from "./components/ScreenLayout";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./components/Jogo-Components/Chute";
import alfabeto from "./assets/script/alfabeto";
import palavras from "./palavras";
// 
const letterChoice = (letter, choice = true) => ({ letter, choice });
let blankAlphabet = [];
let blankWord = [];
alfabeto.forEach((letter) => {
  blankAlphabet.push(letterChoice(letter));
});
"".split("").forEach((letter) => {
  blankWord.push(letterChoice(letter, false));
});
// 
function App() {
  const [palavra, setPalavra] = useState(blankWord);
  const [misplay, setMisplay] = useState(0);
  const [alphabet, setAlphabet] = useState(blankAlphabet);

  const jogada = ({ target }) => {
    
    setPalavra(
      palavra.map((current) => {
        if (current.letter === target.textContent) {
          return { letter: current.letter, choice: true };
        } else {
          return current;
        }
      })
    );
    //check if the letter is in the "palavra"
    //check if misplays is less than 6
    if (!target) {
      setMisplay(misplay + 1);
    } else {
      setMisplay(misplay);
    }
    //change the alfabeto array to remove the letter
  };

  const startGame = () => {
    const theWord = palavras[Math.floor(Math.random() * palavras.length)];
    let newWord = [];
    let activeAlphabet = [];
    theWord.split("").forEach((letter) => {
      newWord.push(letterChoice(letter, false));
    });
    alphabet.forEach((letter) => {
      activeAlphabet.push(letterChoice(letter.letter, false));
    });
    setPalavra(newWord);
    setAlphabet(activeAlphabet);
  };

  return (
    <ScreenLayout>
      <Jogo palavra={palavra} misplayAmount={misplay} startGame={startGame} />
      <Letras keys={alphabet} jogada={jogada} />
      <Chute />
    </ScreenLayout>
  );
}
export default App;
