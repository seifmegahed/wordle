import { FormEvent, useState } from "react";

import Modal from "./Modal";
import WordRow from "./WordRow";
import HiddenInput from "./HiddenInput";
import PageWrapper from "./PageWrapper";

import { ColumnType } from "../types/globalTypes";

import { getRandomWordle } from "../data/wordFetch";
import { BG_BLANK, BG_GRAY, BG_GREEN, BG_YELLOW } from "../data/colors";

const wordMatrixInitialValue = Array(5).fill(
  Array(5).fill({ letter: "", color: BG_BLANK })
);

function GameBody(props: {
  onWordChange: (word: string) => void;
  onRowChange: (lettersUsed: string[]) => void;
}) {
  const [wordMatrix, setWordMatrix] = useState<ColumnType[][]>(
    wordMatrixInitialValue
  );
  const [startModal, setStartModal] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [word, setWord] = useState("");

  function updateMatrix(_value: string, _currentIndex: number) {
    setWordMatrix((prev) =>
      prev.map((_row, index) => {
        if (_currentIndex === index)
          return _row.map((_, i) => ({
            letter: _value[i] || "",
            color: BG_BLANK,
          }));
        return _row;
      })
    );
  }

  function resetGame() {
    const newWord = getRandomWordle();
    setActiveRow(0);
    setInputValue("");
    setWord(newWord);
    setWordMatrix(wordMatrixInitialValue);
    setStartModal(false);
    setGameEnd(false);
    setWonGame(false);
    props.onRowChange([]);
    props.onWordChange(newWord);
  }

  function checkRow() {
    setWordMatrix((prev) =>
      prev.map((_row, index) => {
        if (activeRow !== index) return _row;
        return _row.map((_col, index) => {
          if (word[index] === _col.letter) return { ..._col, color: BG_GREEN };
          if (word.includes(_col.letter)) return { ..._col, color: BG_YELLOW };
          else return { ..._col, color: BG_GRAY };
        });
      })
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (inputValue.length === 5) {
      if (inputValue === word) setWonGame(true);
      if (activeRow === 4) setGameEnd(true);

      checkRow();
      setInputValue("");
      setActiveRow((prev) => prev + 1);
      props.onRowChange(
        wordMatrix
          .flatMap((v) => v)
          .filter((v) => v.letter !== "")
          .map((v) => v.letter)
      );
    }
  }

  function handleInput(value: string) {
    if (value.match(/^[A-Za-z]*$/))
      setInputValue((prev) => {
        if (value.length < 6) {
          updateMatrix(value.toUpperCase(), activeRow);
          return value.toUpperCase();
        }
        return prev;
      });
  }

  return (
    <PageWrapper>
      {startModal && (
        <Modal>
          <p className="text-5xl">Welcome</p>
          <p className="text-xl">
            Type your word guess and press Enter to step to the next row
          </p>
          <button
            onClick={resetGame}
            className="text-xl p-5 rounded-lg bg-gray-100 hover:bg-blue-100 transition-all duration-500 ease-in-out"
          >
            Press to Start
          </button>
        </Modal>
      )}
      {(gameEnd || wonGame) && (
        <Modal>
          {
            <p className="text-5xl">
              {wonGame ? "Congrats" : "Oops! Try Again"}
            </p>
          }
          <p className="text-xl">{`The Word was ${word}`}</p>
          <button
            onClick={resetGame}
            className="text-xl p-5 rounded-lg bg-gray-100 hover:bg-blue-100 transition-all duration-500 ease-in-out"
          >
            Press to Restart
          </button>
        </Modal>
      )}
      {!(wonGame || gameEnd || startModal) && (
        <form onSubmit={handleSubmit}>
          <HiddenInput value={inputValue} onChange={handleInput} />
        </form>
      )}
      {wordMatrix.map((row, index) => (
        <WordRow key={"word-row-" + index} rowArray={row} />
      ))}
    </PageWrapper>
  );
}

export default GameBody;
