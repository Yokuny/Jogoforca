import React from "react";
import { useState } from "react";
import ScreenLayout from "./components/ScreenLayout";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./components/Jogo-Components/Chute";
import alfabeto from "./assets/script/alfabeto";
import palavras from "./palavras";

const letterChoice = (letter, choice = true) => ({ letter, choice });
let blankAlphabet = [];
alfabeto.forEach((letter) => {
  blankAlphabet.push(letterChoice(letter));
});

function App() {
  const [palavra, setPalavra] = useState([letterChoice("")]);
  const [misplay, setMisplay] = useState(0);
  const [alphabet, setAlphabet] = useState(blankAlphabet);
  const [wordColor, setWordColor] = useState("black");
  const [blockInput, setBlockInput] = useState(true);

  const closeKeys = (win) => {
    setAlphabet(blankAlphabet.map((letter) => letterChoice(letter.letter)));
    setPalavra(palavra.map((current) => ({ letter: current.letter, choice: true })));
    setBlockInput(true);
    if (win) {
      setWordColor("win");
    } else {
      setWordColor("lose");
      setAlphabet(alphabet.map((letter) => ({ letter: letter.letter, choice: true })));
    } //////////////
  };
  const wordCheck = ({ textContent }) => {
    let letterFound = 0;
    let currentMisplay = misplay;

    palavra.forEach(({ letter }) => {
      if (letter === textContent) letterFound++;
    });
    if (letterFound === 0) {
      setMisplay(currentMisplay + 1);
      if (currentMisplay + 1 >= 6) {
        closeKeys(false);
      }
      letterFound = 0;
    }
  };
  const letterMark = ({ textContent }) => {
    setAlphabet(
      alphabet.map((letter) => {
        if (letter.letter === textContent) {
          return { letter: letter.letter, choice: true };
        } else {
          return letter;
        }
      })
    );
  };
  const wordMark = ({ textContent }) => {
    let count = 0;
    setPalavra(
      palavra.map((current) => {
        if (current.letter === textContent) {
          count++;
          return { letter: current.letter, choice: true };
        } else {
          if (current.choice === true) count++;
          return current;
        }
      })
    );
    if (count === palavra.length) closeKeys(true);
  };
  const jogada = ({ target }) => {
    wordCheck(target);
    letterMark(target);
    wordMark(target);
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
    setMisplay(0);
    setAlphabet(activeAlphabet);
    setWordColor("black");
    setBlockInput(false);
  };
  return (
    <ScreenLayout>
      <Jogo palavra={palavra} misplayAmount={misplay} startGame={startGame} wordColor={wordColor} />
      <Letras keys={alphabet} jogada={jogada} />
      <Chute input={blockInput} />
    </ScreenLayout>
  );
}
export default App;
