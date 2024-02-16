import { Icon16Dropdown } from "@vkontakte/icons";
import style from "./Title.module.css";
import { NewsActions } from "../../Profile/NewsActions";
import { useClickOutside } from "../../Common/clickOutside";
import MiniTablWithoutFix from "../../Common/MiniTablWithoutFix/MiniTablWithoutFix";

const NewsTitle = () => {
  const { ref: menuRef, isShow, onShow } = useClickOutside();
  return (
    <div className={style.title} onClick={onShow} ref={menuRef}>
      <div
        className={style.title_container}
        style={{
          paddingLeft: "9px",
        }}
      >
        <div className={style.title_content}>
          <div className={style.title_text}>Новости</div>
          <div className={style.title_icon__near}>
            <Icon16Dropdown />
          </div>
        </div>
      </div>
      <div>
        {isShow && (
          <MiniTablWithoutFix
            width="260px"
            height="210px"
            radius="12px"
            position="absolute"
            left="38%"
            top="63px"
            border="1px solid #d7d8d9"
            padding="8px 0"
          ><NewsActions/></MiniTablWithoutFix>
        )}
      </div>
    </div>
  );
};

export default NewsTitle;
