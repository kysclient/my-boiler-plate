"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SampleLogo = () => {
  const { theme } = useTheme();
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const srcPath = useMemo(() => {
    return `/images/${theme}/logo.png`;
  }, [theme]);

  if (!isMount) return null;

  return (
    <Link href={"/"}>
      <img src={srcPath} className="w-[144px]" />
    </Link>
  );
};

export default SampleLogo;
