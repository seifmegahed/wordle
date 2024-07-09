export default function HiddenInput(props: {
  onChange?: (value: string) => void;
  value?: string;
}) {
  return (
    <input
      autoFocus
      value={props.value}
      className="absolute h-full w-full opacity-0 cursor-default z-20 top-0 left-0"
      onChange={(e) => {
        if (props.onChange !== undefined) {
          props.onChange(e.target.value);
        }
      }}
    />
  );
}
