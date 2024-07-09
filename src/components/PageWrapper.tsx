import { ReactNode } from "react";

export default function PageWrapper(props: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative">
      {props.children}
    </div>
  );
}
