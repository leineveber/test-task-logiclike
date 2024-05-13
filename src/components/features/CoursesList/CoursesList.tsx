import { Course } from "@/api/courses/coursesTypes";
import { EmptyState } from "@/components/common/EmptyState/EmptyState";
import { useCourses } from "@/hooks/useCourses";
import { defaultTab } from "@/hooks/useTabs";
import styles from "./CoursesList.module.scss";
import { CourseCard } from "./components/CourseCard/CourseCard";

interface Props {
  currentTab: Course["tags"][number];
}

export const CoursesList = ({ currentTab }: Props) => {
  const { data } = useCourses();

  const filteredCourses = data?.filter(
    (course) => currentTab === defaultTab || course.tags.includes(currentTab)
  );

  return filteredCourses?.length ? (
    <div className={styles.grid}>
      {filteredCourses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  ) : (
    <EmptyState />
  );
};
