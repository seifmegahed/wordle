import { useState } from "react";
import Title from "./components/Title";
import SideBar from "./components/SideBar";
import GameBody from "./components/GameBody";

function App() {
  const [word, setWord] = useState("");
  const [rightLetters, setRightLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  function handleWordChange(value: string) {
    setWord(value);
  }

  function handleRowChange(value: string[]) {
    setRightLetters(value.filter((v) => word.includes(v)));
    setWrongLetters(value.filter((v) => !word.includes(v)));
  }

  return (
    <div className="text-gray-600 font-inter h-screen flex flex-col relative overflow-hidden">
      <Title />
      <SideBar
        rightLetters={rightLetters}
        wrongLetters={wrongLetters}
        isOpen={!!wrongLetters.length}
      />
      <GameBody onRowChange={handleRowChange} onWordChange={handleWordChange} />
    </div>
  );
}

export default App;
