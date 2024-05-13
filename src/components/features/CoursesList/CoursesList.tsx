import { useCourses } from "@/hooks/useCourses";
import styles from "./CoursesList.module.scss";
import { CourseCard } from "./components/CourseCard/CourseCard";

export const CoursesList = () => {
  const { data } = useCourses();

  return (
    <div className={styles.grid}>
      {data?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
