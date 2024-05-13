import { Course } from "@/api/courses/coursesTypes";
import { useCallback, useState } from "react";

export const defaultTab = "all";

export const useTabs = () => {
  // it's better to handle that inside URL query params
  const [currentTab, setCurrentTab] =
    useState<Course["tags"][number]>(defaultTab);

  const handleTabClick = useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);

  return {
    currentTab,
    handleTabClick,
  };
};
