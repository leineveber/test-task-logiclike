import { Course } from "@/api/courses/coursesTypes";
import { useCallback, useState } from "react";

export const defaultTab = "all" as const;

export type Tab = Course["tags"][number] | typeof defaultTab;

export const useTabs = () => {
  // it's better to handle that inside URL query params
  const [currentTab, setCurrentTab] = useState<Tab>(defaultTab);

  const handleTabClick = useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);

  return {
    currentTab,
    handleTabClick,
  };
};
