import { ColumnType } from "../types/globalTypes";

export default function LetterColumn(props: ColumnType) {
  return (
    <div
      className={`rounded border border-gray-500 h-16 w-16 flex items-center justify-center text-2xl ${props.color}`}
    >
      {props.letter}
    </div>
  );
}