import React from "react";
import { useState } from "react";
import ScreenLayout from "./components/ScreenLayout";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./components/Jogo-Components/Chute";
import alfabeto from "./assets/script/alfabeto";
import palavras from "./palavras";

function App() {
  const [palavra, setPalavra] = useState("___");
  const [misplay, setMisplay] = useState(0);
  const jogada = ({ target }) => {
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
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
  };

  return (
    <ScreenLayout>
      <Jogo palavra={palavra} misplayAmount={misplay} startGame={startGame} />
      <Letras keys={alfabeto} jogada={jogada} />
      <Chute />
    </ScreenLayout>
  );
}
export default App;
