import React from "react";
import {
  Icon28ErrorCircleOutline,
  Icon28CheckCircleFill,
} from "@vkontakte/icons";

const createAlertInfo = (type) => {
  switch (type) {
    case "success":
      return {
        icon: <Icon28CheckCircleFill color="green" />,
      };
    case "error":
      return {
        icon: <Icon28ErrorCircleOutline color="red" />,
      };
    default:
      throw new Error("Такого типа не существует");
  }
};

/**
 *
 * @param {{
 *    type: "success" | "error",
 *    action: import("react").ReactElement
 * }} param0
 * @returns
 */
const Alert = ({ children, type, action }) => {
  const { icon } = createAlertInfo(type);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: "12px",
      }}
    >
      {icon}
      {children}
      {action}
    </div>
  );
};

export default Alert;
