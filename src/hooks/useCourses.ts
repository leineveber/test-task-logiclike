import { CoursesService } from "@/api/courses/coursesService";
import { useMemo } from "react";
import { useAPI } from "./useAPI";

const getCourses = () => CoursesService.getCourses();

export const useCourses = () => {
  const { data, ...rest } = useAPI({
    callback: getCourses,
  });

  const tags = useMemo(
    () => Array.from(new Set(data?.map((course) => course.tags).flat())),
    [data]
  );

  return {
    data,
    tags,
    ...rest,
  };
};
