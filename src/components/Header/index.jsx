import "./style.css";

const Header = ({ userInput, setUserInput, currentFunction }) => {
  return (
    <header>
      <h1>Burguer Kenzie</h1>
      <form>
        <input
          className="input"
          placeholder="Digitar Pesquisa"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        ></input>
        <button
          onClick={(event) => {
            currentFunction();
            event.preventDefault();
          }}
        >
          Pesquisar
        </button>
      </form>
    </header>
  );
};

export default Header;
