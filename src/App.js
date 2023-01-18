import "./App.css";
import { useState } from "react";
import ActionButton from "./componects/ActionButton";
import ImgAction from "./componects/ImgAction";
import Player from "./componects/Player";

function App() {
  let player1;
  let player2;
  const [numero, setNumero] = useState(1);
  const [estado, setEstado] = useState(false);
  const [current, setCurret] = useState(0);
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [activePlayer, setActivePlayer] = useState({
    type: "player__active",
    id: 1,
  });
  const [active, setActive] = useState(1);

  const setNome = () => {
    player1 = prompt("Entre com o nome do Player 1");
    player2 = prompt("Entre com o nome do Player 2");
  };

  const handleChangeUser = () => {
    setCurret(0);
    setNumero(1);

    if (active === 1) {
      setActivePlayer({ ...activePlayer, id: 2 });
      setActive(2);
    } else {
      setActivePlayer({ ...activePlayer, id: 1 });
      setActive(1);
    }

    if (score >= 100 || score2 >= 100) {
      setActivePlayer({ ...activePlayer, type: "player__winner" });
      setEstado(true);
    }
  };

  const handleRool = (number) => {
    setNumero(number);
    if (number === 1) {
      setCurret(0);
      handleChangeUser();
      return;
    }
    console.log(active);
    console.log(number);
    setCurret(current + number);
  };

  const handleHold = (number) => {
    if (number !== 0) {
      if (active === 1) setScore(score + number);
      if (active === 2) setScore2(score2 + number);

      handleChangeUser();
    }
  };
  const handleNewGame = () => {
    setActive(1);
    setActivePlayer({ type: "player__active", id: 1 });
    setCurret(0);
    setNumero(1);
    setScore(0);
    setScore2(0);
    setEstado(false);
    setNome();
  };

  return (
    <div className="dashboard">
      <Player
        type={activePlayer.id === 1 ? activePlayer.type : "rocha"}
        current={activePlayer.id === 1 ? current : 0}
        score={score}
      />
      <ActionButton name={"🔂New Game"} type={"new"} onAction={handleNewGame} />
      <ActionButton
        name={"❄Roll dace"}
        estado={estado}
        type={"roll"}
        onAction={handleRool}
      />
      <ActionButton
        estado={estado}
        name={"🚩Hold dace"}
        type={"hold"}
        current={current}
        onAction={handleHold}
      />
      <ImgAction numero={numero} />
      <Player
        type={activePlayer.id === 2 ? activePlayer.type : "rocha"}
        current={activePlayer.id === 2 ? current : 0}
        score={score2}
        // score={score}
      />
    </div>
  );
}

export default App;
