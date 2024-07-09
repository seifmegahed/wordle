import { ReactNode } from "react";

export default function Modal(props: { children: ReactNode }) {
  return (
    <div className="absolute w-screen h-screen bg-white/80 z-50 flex items-center justify-center">
      <div className="bg-white  xl:max-w-screen-lg max-w-screen-md h-2/3 w-full rounded-3xl shadow-2xl flex flex-col items-center justify-center p-5 gap-5 relative">
        {props.children}
      </div>
    </div>
  );
}
