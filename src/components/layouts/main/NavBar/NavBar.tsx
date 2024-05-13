import { ValueButton } from "@/components/common/ValueButton/ValueButton";
import classNames from "classnames";
import styles from "./NavBar.module.scss";

interface Props {
  className?: string;
  currentTab: string;
  handleTabClick: (tab: string) => void;
  tags: string[];
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
            isActive={currentTab === "all"}
            value="all"
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
