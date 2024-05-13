import { useCourses } from "@/hooks/useCourses";

export const GameList = () => {
  useCourses();

  return <div>GameList</div>;
};
