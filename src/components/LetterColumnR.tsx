import { useEffect, useState } from "react";
import { ColumnTypeR } from "../types/globalTypes";
import { BG_BLANK } from "../data/colors";

export default function LetterColumn(props: ColumnTypeR) {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    if (props.color !== BG_BLANK) {
      setTimeout(() => setReveal(true), 300 * props.delay);
    } else setReveal(false);
  }, [props.color, props.delay]);
  return (
    <div
      className={`relative h-16 w-16 preserve-3d transition-all duration-1000 ease-in-out ${
        reveal && "rotate-y-180"
      }`}
    >
      <div className="absolute backface-hidden rounded border border-gray-500 flex items-center justify-center text-2xl h-full w-full bg-white">
        {props.letter}
      </div>
      <div
        className={`${props.color} absolute rotate-y-180 backface-hidden rounded border border-gray-500 flex items-center justify-center text-2xl h-full w-full`}
      >
        {props.letter}
      </div>
    </div>
  );
}
