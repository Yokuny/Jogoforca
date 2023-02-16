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
  const startGame = () => {
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
  };
  return (
    <ScreenLayout>
      <Jogo palavra={palavra} startGame={startGame} />
      <Letras keys={alfabeto} />
      <Chute />
    </ScreenLayout>
  );
}
export default App;
