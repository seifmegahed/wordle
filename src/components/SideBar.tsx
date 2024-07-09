import { BG_BLANK, BG_GRAY, BG_GREEN } from "../data/colors";
import { letters } from "../data/letters";
import LetterColumn from "./LetterColumn";

export default function SideBar(props: {
  rightLetters: string[];
  wrongLetters: string[];
  isOpen: boolean;
}) {
  function selectColor(letter: string) {
    console.log("here");
    if (props.rightLetters.includes(letter)) return BG_GREEN;
    else if (props.wrongLetters.includes(letter)) return BG_GRAY;
    else return BG_BLANK;
  }
  return (
    <div
      className={`border-l border-gray-300 bg-white position absolute top-0 right-0 origin-top-right lg:block hidden ${
        !props.isOpen && "translate-x-full"
      } transition-all duration-500 ease-in-out p-5 max-h[calc(100vh - 16px)] overflow-scroll h-full flex items-center`}
    >
      <div className="grid grid-cols-3 gap-5">
        {letters.map((letter) => (
          <LetterColumn
            key={"side-bar-" + letter}
            letter={letter}
            color={selectColor(letter)}
          />
        ))}
      </div>
    </div>
  );
}
