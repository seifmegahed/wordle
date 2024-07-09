import { ColumnType } from "../types/globalTypes";
import LetterColumnR from "./LetterColumnR";

export default function WordRow(props: { rowArray: ColumnType[] }) {
  return (
    <div className="flex gap-4">
      {props.rowArray.map(({ letter, color }, index) => (
        <LetterColumnR
          key={"letter-box-" + index}
          letter={letter}
          color={color}
          delay={index}
        />
      ))}
    </div>
  );
}
