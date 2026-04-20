import { useContext } from "react";
// import Headroom from "react-headroom";
import StyleContext from "../../contexts/StyleContext";
import {
  achievementSection,
  blogSection,
  greeting,
  openSource,
  resumeSection,
  skillsSection,
  talkSection,
  workExperiences
} from "../../portfolio";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import styles from "./Header.module.scss";

const Header = () => {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <header className={isDark ? `${styles.dark_menu} ${styles.header}` : styles.header}>
      <a href="/portfolio" className={styles.logo}>
        <span className={styles.grey_color}> &lt;</span>
        <span className={styles.logo_name}>{greeting.username}</span>
        <span className={styles.grey_color}>/&gt;</span>
      </a>
      <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label
        className={styles.menu_icon}
        htmlFor="menu-btn"
        style={{ color: "white" }}
      >
        <span className={isDark ? `${styles.navicon} ${styles.navicon_dark}` : styles.navicon}></span>
      </label>
      <ul className={isDark ? `${styles.dark_menu} ${styles.menu}` : styles.menu}>
        {viewSkills && (
          <li>
            <a href="#skills">Skills</a>
          </li>
        )}
        {viewExperience && (
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
        )}
        {viewOpenSource && (
          <li>
            <a href="#opensource">Open Source</a>
          </li>
        )}
        {viewAchievement && (
          <li>
            <a href="#achievements">Achievements</a>
          </li>
        )}
        {viewBlog && (
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        )}
        {viewTalks && (
          <li>
            <a href="#talks">Talks</a>
          </li>
        )}
        {viewResume && (
          <li>
            <a href="#resume">Resume</a>
          </li>
        )}
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a>
            <ToggleSwitch />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
