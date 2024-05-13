import { Course } from "@/api/courses/coursesTypes";
import styles from "./CourseCard.module.scss";

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  return (
    <article className={styles.wrapper} tabIndex={0} role="button">
      <div
        className={styles.imgWrapper}
        style={{ backgroundColor: course.bgColor }}
      >
        <img src={course.image} alt={course.name} />
      </div>
      <div className={styles.textWrapper}>{course.name}</div>
    </article>
  );
};
