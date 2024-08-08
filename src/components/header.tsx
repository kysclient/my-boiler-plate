"use client";
import ToggleThemeButton from "./toggle-theme-button";
import SampleLogo from "@/ui/logo";

const Header = () => {
  return (
    <header className="flex flex-row h-[64px] justify-between items-center w-full p-[20px] border-b border-border">
      <SampleLogo />
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
