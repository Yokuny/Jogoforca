import ScreenLayout from "./components/ScreenLayout";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./components/Jogo-Components/Chute";
import alfabeto from "./assets/script/alfabeto";
import palavras from "./palavras";

function App() {
  return (
    <ScreenLayout>
      <Jogo palavras={palavras} />
      <Letras keys={alfabeto} />
      <Chute />
    </ScreenLayout>
  );
}
export default App;
