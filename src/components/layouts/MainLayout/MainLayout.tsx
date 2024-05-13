import { useCourses } from "@/hooks/useCourses";
import { Tab, useTabs } from "@/hooks/useTabs";
import styles from "./MainLayout.module.scss";
import { NavBar } from "./components/NavBar/NavBar";

interface Props {
  children: (currentTab: Tab) => React.ReactNode;
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
        onTabClick={handleTabClick}
      />

      <section className={styles.section}>{children(currentTab)}</section>
    </main>
  );
}
