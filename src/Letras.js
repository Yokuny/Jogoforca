import Keys from "./components/Jogo-Components/LetrasComponents";
const Letras = ({ keys, jogada }) => {
  return (
    <Keys>
      {keys.map((letter) => {
        // console.log(letter);
        return (
          <button disabled={letter.choice} key={letter.letter} onClick={jogada}>
            {letter.letter}
          </button>
        );
      })}
    </Keys>
  );
};
export default Letras;
