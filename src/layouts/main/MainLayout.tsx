import { useCourses } from "@/hooks/useCourses";
import { useTabs } from "@/hooks/useTabs";
import styles from "./MainLayout.module.scss";
import { NavBar } from "./NavBar/NavBar";

export default function MainLayout() {
  const { data, isLoading, tags } = useCourses();
  const { currentTab, handleTabClick } = useTabs();

  return (
    <main className={styles.main}>
      <NavBar
        className={styles.navBar}
        tags={tags}
        currentTab={currentTab}
        handleTabClick={handleTabClick}
      />

      <section className={styles.section}>Main Layout</section>
    </main>
  );
}
