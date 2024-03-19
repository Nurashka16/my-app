import { React } from "react";
import { Icon20GearOutline } from "@vkontakte/icons";
import style from "./Menu.module.css";
import Tabs from "../../../Common/Tabs/Tabs";
import Tab from "../../../Common/Tabs/Tab";
import { useSelector } from "react-redux";
import mediaResourcesData from "../MediaResourcesData";
import { setMediaResource } from "../../../../redux/profile-slice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const targetMediaResource = useSelector(
    (state) => state.profilePage.mediaResource
  );
  const tabs = mediaResourcesData.map((mediaResource) => {
    return (
      <Tab
        value={mediaResource.name}
        iconLeft={mediaResource.iconLeft}
        iconRight={mediaResource.iconRight}
      >
        {mediaResource.name}
      </Tab>
    );
  });

  return (
    <div className={style.menu}>
      <div className={style.menu_container}>
        <Tabs
          value={targetMediaResource}
          onChange={(value) => dispatch(setMediaResource(value))}
        >
          {tabs}
        </Tabs>
        <div className={style.setting}>
          <Icon20GearOutline />
        </div>
      </div>
    </div>
  );
};

export default Menu;
