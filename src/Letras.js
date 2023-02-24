import Keys from "./components/Jogo-Components/LetrasComponents";
const Letras = ({ keys, jogada }) => {
  return (
    <Keys>
      {keys.map((letter) => {
        return (
          <button disabled={letter.choice} key={letter.letter} onClick={(e) => jogada(e)} data-test="letter">
            {letter.letter}
          </button>
        );
      })}
      {/* //////////////////// */}
      {keys.map((aLetter) => {
        return (
          <div>
            <pre>{JSON.stringify(aLetter)}</pre>
          </div>
        );
      })}
    </Keys>
  );
};
export default Letras;