const OPEN_BLOCK = "OPEN_BLOCK";
const CLOSE_BLOCK = "CLOSE_BLOCK";
const RE_HEADER_TITLE = "RE_HEADER_TITLE";

let initialState = {
  block: false,
  elemsBurger: [
    {
      id: 1,
      text: "Новости",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="newsfeed_outline_28__Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="newsfeed_outline_28__newsfeed_outline_28">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M17.59 3c2.18 0 3.23.2 4.32.79a5.54 5.54 0 0 1 2.3 2.3c.59 1.09.79 2.14.79 4.32v7.18c0 2.18-.2 3.23-.79 4.32a5.54 5.54 0 0 1-2.3 2.3c-1.09.59-2.14.79-4.32.79h-7.18c-2.18 0-3.23-.2-4.32-.79a5.54 5.54 0 0 1-2.3-2.3C3.2 20.82 3 19.77 3 17.6v-7.18c0-2.18.2-3.23.79-4.32a5.54 5.54 0 0 1 2.3-2.3C7.18 3.2 8.23 3 10.4 3h7.18Zm-12.6 8L5 17.59c0 1.88.14 2.62.55 3.38.34.64.84 1.14 1.48 1.48.76.4 1.5.55 3.38.55h7.18c1.88 0 2.62-.14 3.38-.55a3.54 3.54 0 0 0 1.48-1.48c.4-.76.55-1.5.55-3.38V11H5Zm12.6-6h-7.18c-1.88 0-2.62.14-3.38.55-.64.34-1.14.84-1.48 1.48A4.5 4.5 0 0 0 5.05 9h17.9a4.5 4.5 0 0 0-.5-1.97 3.54 3.54 0 0 0-1.48-1.48c-.76-.4-1.5-.55-3.38-.55Z"
                id="newsfeed_outline_28__Icon-Color"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </g>
          </g>
        </svg>
      ),
      btn: (
        <svg
          fill="none"
          height="28"
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M14 26a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm6.2-14.8a1 1 0 0 0-1.4-1.4L12 16.58l-2.8-2.8a1 1 0 0 0-1.4 1.42l3.5 3.5a1 1 0 0 0 1.4 0z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      text: "Обновления",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="history_forward_outline_28__Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="history_forward_outline_28__history_forward_outline_28">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M14.5 2c3.25 0 6.28 1.3 8.5 3.53V3.88A1 1 0 0 1 25 4v4.12A1 1 0 0 1 24 9h-4.12A1 1 0 0 1 20 7h1.64a10 10 0 1 0-.07 14.07A1 1 0 1 1 23 22.48 12 12 0 1 1 14.5 2ZM14 8a1 1 0 0 1 1 1v4.59l2.7 2.7a1 1 0 0 1-1.4 1.42l-3-3A1 1 0 0 1 13 14V9a1 1 0 0 1 1-1Z"
                id="history_forward_outline_28__Icon-Color"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </g>
          </g>
        </svg>
      ),
      btn: "",
    },
    {
      id: 3,
      text: "Фотографии",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="history_forward_outline_28__Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="history_forward_outline_28__history_forward_outline_28">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M14.5 2c3.25 0 6.28 1.3 8.5 3.53V3.88A1 1 0 0 1 25 4v4.12A1 1 0 0 1 24 9h-4.12A1 1 0 0 1 20 7h1.64a10 10 0 1 0-.07 14.07A1 1 0 1 1 23 22.48 12 12 0 1 1 14.5 2ZM14 8a1 1 0 0 1 1 1v4.59l2.7 2.7a1 1 0 0 1-1.4 1.42l-3-3A1 1 0 0 1 13 14V9a1 1 0 0 1 1-1Z"
                id="history_forward_outline_28__Icon-Color"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </g>
          </g>
        </svg>
      ),
      btn: "",
    },
    {
      id: 4,
      text: "Подкасты",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="podcast_outline_28__Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="podcast_outline_28__podcast_outline_28" fill-rule="nonzero">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M14 6a6 6 0 0 1 6 6v6a6 6 0 0 1-5 5.92v1.58a1 1 0 0 1-2 0v-1.58A6 6 0 0 1 8 18v-6a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4h2.5a1 1 0 0 1 0 2H10v2h2.5a1 1 0 0 1 0 2H10a4 4 0 1 0 8 0h-1a1 1 0 0 1-.12-2H18v-2h-1a1 1 0 0 1-.12-2H18a4 4 0 0 0-4-4Zm0-6a10 10 0 0 1 9.95 9.01c.87.1 1.55.84 1.55 1.74v4.5a1.75 1.75 0 0 1-3.5 0V12a8 8 0 1 0-16 0v5.25a1.75 1.75 0 0 1-3.5 0v-4.5c0-.9.68-1.64 1.55-1.74A10 10 0 0 1 14 2Z"
                id="podcast_outline_28__Icon-Color"
                fill="currentColor"
              ></path>
            </g>
          </g>
        </svg>
      ),
      btn: "",
    },
    {
      id: 5,
      text: "Сначала интересные",
      icon: (
        <svg
          fill="none"
          height="28"
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path d="M6 4a1 1 0 0 0-2 0v1H3a1 1 0 0 0 0 2h1v17a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2H6zm9 0a1 1 0 1 0-2 0v12h-1a1 1 0 1 0 0 2h1v6a1 1 0 1 0 2 0v-6h1a1 1 0 1 0 0-2h-1zm8-1a1 1 0 0 1 1 1v7h1a1 1 0 1 1 0 2h-1v11a1 1 0 1 1-2 0V13h-1a1 1 0 1 1 0-2h1V4a1 1 0 0 1 1-1z"></path>
          </g>
        </svg>
      ),
      btn: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-toggle2-off"
          viewBox="0 0 16 16"
        >
          <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z" />
          <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z" />
        </svg>
      ),
    },
    {
      id: 6,
      text: "Настроить новости",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="settings_outline_28__Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="settings_outline_28__settings_outline_28"
              fill-rule="nonzero"
            >
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M15.15 2.04c.43.07.83.23 1.2.52.59.48.87 1.08 1.09 1.95.06.23.15.5.27.74.28.12.55.25.82.4.26-.07.51-.15.71-.25 1.42-.65 2.6-.62 3.57.43l.24.28.63.77c.17.21.24.3.35.49.69 1.15.42 2.22-.46 3.38-.14.2-.29.45-.41.71l.2.86c.21.18.45.34.66.44.8.41 1.33.82 1.66 1.51.2.42.26.85.24 1.28-.02.23-.04.36-.11.64l-.23.98c-.06.28-.1.4-.18.62-.16.4-.41.76-.78 1.05-.6.47-1.24.61-2.15.63-.23 0-.5.04-.77.1-.18.24-.36.47-.56.7 0 .27.03.54.07.76.2.89.2 1.55-.13 2.24-.2.42-.49.74-.84 1-.19.12-.3.19-.57.31l-.9.44c-.26.13-.38.18-.6.25-.4.13-.84.16-1.3.05-.74-.16-1.26-.58-1.84-1.27a4.1 4.1 0 0 0-.6-.56 9.63 9.63 0 0 1-.87 0 4.1 4.1 0 0 0-.59.56c-.58.7-1.1 1.1-1.84 1.27-.46.1-.9.08-1.3-.05a3.48 3.48 0 0 1-.6-.25l-.9-.44a7.15 7.15 0 0 1-.19-.09c-1.31-.68-1.7-1.85-1.35-3.46.04-.22.07-.49.07-.76-.2-.23-.38-.46-.56-.7-.27-.06-.54-.1-.77-.1-.9-.02-1.55-.16-2.15-.63a2.52 2.52 0 0 1-.78-1.05 3.48 3.48 0 0 1-.18-.62l-.23-.98c-.07-.3-.1-.43-.1-.68a2.5 2.5 0 0 1 .29-1.34c.34-.63.84-1.02 1.6-1.4.2-.11.45-.27.67-.45.05-.29.12-.58.2-.86a4.11 4.11 0 0 0-.42-.7c-.88-1.17-1.15-2.24-.46-3.4.11-.17.18-.27.35-.48l.63-.77c.1-.14.16-.2.24-.28.97-1.05 2.15-1.08 3.57-.43.2.1.45.18.71.25.27-.15.54-.28.82-.4.12-.25.21-.51.27-.74.22-.87.5-1.47 1.1-1.95.36-.29.76-.45 1.2-.52.17-.03.3-.04.48-.04h1.16c.3 0 .42 0 .65.04ZM14.59 4H13.5c-.5 0-.75 0-1 1a6.35 6.35 0 0 1-.84 1.87c-.64.21-1.24.5-1.8.87a6.35 6.35 0 0 1-1.95-.52c-.93-.44-1.09-.24-1.4.14l-.63.78c-.32.4-.48.58.14 1.4.35.47.73 1.16.94 1.86-.22.6-.37 1.24-.43 1.9-.5.53-1.13.98-1.64 1.24-.92.47-.86.72-.75 1.2l.22.98c.12.48.17.73 1.2.75.57 0 1.33.13 2 .39.35.57.77 1.1 1.25 1.56.1.72.05 1.47-.07 2.03-.21 1 .01 1.12.46 1.34l.9.43c.45.22.68.33 1.34-.46.37-.44.95-.95 1.59-1.32a7.57 7.57 0 0 0 1.94 0c.64.37 1.22.88 1.6 1.32.65.8.88.68 1.33.46l.9-.43c.45-.22.67-.33.46-1.34a6.35 6.35 0 0 1-.07-2.03c.48-.46.9-.99 1.24-1.56a6.35 6.35 0 0 1 2-.4c1.04-.01 1.1-.26 1.2-.74l.23-.98c.11-.48.17-.73-.75-1.2a6.35 6.35 0 0 1-1.64-1.24c-.06-.66-.21-1.3-.43-1.9.21-.7.59-1.39.94-1.85.62-.83.46-1.02.14-1.4l-.63-.79c-.31-.38-.47-.58-1.4-.14-.51.24-1.24.45-1.95.52a7.47 7.47 0 0 0-1.8-.87c-.4-.6-.7-1.31-.84-1.87-.24-.94-.47-1-.91-1ZM14 9.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                id="settings_outline_28__Icon-Color"
                fill="currentColor"
              ></path>
            </g>
          </g>
        </svg>
      ),
      btn: "",
    },
  ],
  title: "",
};

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_BLOCK:
      console.log("open");
      return {
        ...state,
        block: true,
      };
    case CLOSE_BLOCK: {
      console.log("close");
      return {
        ...state,
        block: false,
      };
    };
    case RE_HEADER_TITLE: {
      console.log("reTitle");
      return {
        ...state,
        title: action.url,
      };
    }
    default:
      return state;
  }
}
export const reHeaderTitle = (url) => ({
  type: RE_HEADER_TITLE, url
})

export const openBlock = () => ({
  type: OPEN_BLOCK,
});
export const closeBlock = () => ({
  type: CLOSE_BLOCK,
});

export default headerReducer;
