import React from "react";
import { useState } from "react";
import ScreenLayout from "./components/ScreenLayout";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./components/Jogo-Components/Chute";
import alfabeto from "./assets/script/alfabeto";
import palavras from "./palavras";

const letterChoice = (letter, choice = true) => ({ letter, choice });
let blankKeyboard = [];
alfabeto.forEach((letter) => {
  blankKeyboard.push(letterChoice(letter));
});

function App() {
  const [palavra, setPalavra] = useState([letterChoice("")]);
  const [misplay, setMisplay] = useState(0);
  const [keyboard, setKeyboard] = useState(blankKeyboard);
  const [wordColor, setWordColor] = useState("black");
  const [blockInput, setBlockInput] = useState(true);
  const wordColorMark = (win) => {
    const newKeyboard = keyboard.map((key) => {
      return {
        letter: key.letter,
        choice: true,
      };
    });
    setKeyboard(newKeyboard);
    setBlockInput(true);
    if (win === "lose") {
      setWordColor(win);
    }
    if (win === "win") {
      setWordColor(win);
    }
  };

  const misCheck = ({ textContent }) => {
    //essa função verifica se a letra escolhida está na palavra
    let letterFound = 0;
    let currentMisplay = misplay;
    palavra.forEach(({ letter }) => {
      if (letter === textContent) letterFound++;
    });
    if (letterFound === 0) {
      setMisplay(currentMisplay + 1);
      const newKeyboard = keyboard.map((key) => {
        return {
          letter: key.letter,
          choice: true,
        };
      });
      setKeyboard(newKeyboard);
      //aqui quer dizer que perdeu
      if (currentMisplay + 1 >= 6) {
        wordColorMark("lose");
      }
    }
  };
  const closeLetter = ({ textContent }) => {
    setKeyboard(
      keyboard.map((letter) => {
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
    if (count === palavra.length) {
      wordColorMark("win");
    }
  };
  const jogada = ({ target }) => {
    misCheck(target);
    closeLetter(target);
    wordMark(target);
  };

  const startGame = () => {
    const theWord = palavras[Math.floor(Math.random() * palavras.length)];
    let newWord = [];
    let activeKeyboard = [];
    theWord.split("").forEach((letter) => {
      newWord.push(letterChoice(letter, false));
    });
    keyboard.forEach((letter) => {
      activeKeyboard.push(letterChoice(letter.letter, false));
    });
    setPalavra(newWord);
    setMisplay(0);
    setKeyboard(activeKeyboard);
    setWordColor("black");
    setBlockInput(false);
  };
  return (
    <ScreenLayout>
      <Jogo palavra={palavra} misplayAmount={misplay} startGame={startGame} wordColor={wordColor} />
      <Letras keys={keyboard} jogada={jogada} />
      <Chute input={blockInput} />
    </ScreenLayout>
  );
}
export default App;
