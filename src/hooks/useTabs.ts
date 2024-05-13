import { useCallback, useState } from "react";

export const useTabs = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const handleTabClick = useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);

  return {
    currentTab,
    handleTabClick,
  };
};
