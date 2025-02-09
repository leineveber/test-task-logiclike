import { Course } from "@/api/courses/coursesTypes";
import { ValueButton } from "@/components/common/ValueButton/ValueButton";
import { Tab, defaultTab } from "@/hooks/useTabs";
import classNames from "classnames";
import styles from "./NavBar.module.scss";

interface Props {
  className?: string;
  currentTab: Tab;
  onTabClick: (tab: Tab) => void;
  tags: Course["tags"];
}

export const NavBar = ({ className, currentTab, onTabClick, tags }: Props) => {
  return (
    <nav className={classNames(styles.nav, className)}>
      <ul>
        <li>
          <ValueButton
            isBlock
            isActive={currentTab === defaultTab}
            value={defaultTab}
            onPress={onTabClick}
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
              onPress={onTabClick}
            >
              {tag}
            </ValueButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};
