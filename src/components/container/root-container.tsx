"use client";
import Header from "../header";
interface PropsType {
  children: React.ReactNode;
}
export default function RootLayout(props: PropsType) {
  const { children } = props;

  return (
    <div id="rootContainer">
      <Header />
      {children}
    </div>
  );
}
