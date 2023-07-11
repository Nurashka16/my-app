import style from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img
            className={style.logo_img}
            src="https://img.freepik.com/premium-vector/modern-badge-vkontakte-icon_578229-170.jpg"
          />
          <div className={style.logo_text}>ВКОНТАКТЕ</div>
        </div>
        <div className={style.menu}>
          <div className={style.menu_container}>
            <div className={style.menu_text}>Новости</div>
            <div className={style.menu_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2e8dec"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={style.search}>
          <form  className={style.search_form} action="" method="get">
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                fill="gray"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
            <input className={style.search_input} name="s" placeholder="Поиск" type="search" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
