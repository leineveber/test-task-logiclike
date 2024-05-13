import { Course } from "@/api/courses/coursesTypes";
import { useCourses } from "@/hooks/useCourses";
import { useTabs } from "@/hooks/useTabs";
import styles from "./MainLayout.module.scss";
import { NavBar } from "./NavBar/NavBar";

interface Props {
  children: (currentTab: Course["tags"][number]) => React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const { tags } = useCourses();

  const { currentTab, handleTabClick } = useTabs();

  return (
    <main className={styles.main}>
      <NavBar
        className={styles.navBar}
        tags={tags}
        currentTab={currentTab}
        handleTabClick={handleTabClick}
      />

      <section className={styles.section}>{children(currentTab)}</section>
    </main>
  );
}
