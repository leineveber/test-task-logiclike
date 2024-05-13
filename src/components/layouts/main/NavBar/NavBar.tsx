import { Course } from "@/api/courses/coursesTypes";
import { ValueButton } from "@/components/common/ValueButton/ValueButton";
import { defaultTab } from "@/hooks/useTabs";
import classNames from "classnames";
import styles from "./NavBar.module.scss";

interface Props {
  className?: string;
  currentTab: Course["tags"][number];
  handleTabClick: (tab: Course["tags"][number]) => void;
  tags: Course["tags"];
}

export const NavBar = ({
  className,
  currentTab,
  handleTabClick,
  tags,
}: Props) => {
  return (
    <nav className={classNames(styles.nav, className)}>
      <ul>
        <li>
          <ValueButton
            isBlock
            isActive={currentTab === defaultTab}
            value={defaultTab}
            onPress={handleTabClick}
          >
            Все темы
          </ValueButton>
        </li>

        {tags.map((tag) => (
          <li key={tag}>
            <ValueButton
              value={tag}
              isBlock
              isActive={currentTab === tag}
              onPress={handleTabClick}
            >
              {tag}
            </ValueButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};
