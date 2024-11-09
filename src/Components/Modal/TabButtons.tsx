import { commonTab, activeTabStyle, inactiveTab } from "./EpisodeModalStyle";
import { INFO_TAB, CHARACTER_TAB } from "../../Constant";

interface ActionButtonProps {
  activeTab: string;
  handleTabClick: (tab: string) => void;
}

const TabButtons = (props: ActionButtonProps) => {
  const { activeTab, handleTabClick } = props;

  const infoTabStyle = `${commonTab} ${
    activeTab === INFO_TAB ? activeTabStyle : inactiveTab
  }`;

  const characterTabStyle = `${commonTab} ${
    activeTab === CHARACTER_TAB ? activeTabStyle : inactiveTab
  }`;

  return (
    <div className="flex">
      <button className={infoTabStyle} onClick={() => handleTabClick(INFO_TAB)}>
        Info
      </button>
      <button
        className={characterTabStyle}
        onClick={() => handleTabClick(CHARACTER_TAB)}
      >
        Character
      </button>
    </div>
  );
};

export default TabButtons;
