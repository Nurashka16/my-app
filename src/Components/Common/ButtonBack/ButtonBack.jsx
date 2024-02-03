import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon28ArrowLeftOutline} from '@vkontakte/icons';

const ButtonBack = ({ children=<Icon28ArrowLeftOutline/>, width="28px", height="28px", color="#2688eb" }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      style={((width = { width }), (height = { height }), (color = { color }))}
    >
      {children}
    </div>
  );
};

export default ButtonBack;
