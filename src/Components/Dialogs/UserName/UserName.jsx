import React from "react";
import { NavLink } from "react-router-dom";
import CostumLink from "../../CostumLink";

const UserName = (props) => {
  return (
    <div>
      <CostumLink to={"/dialogs/"+props.id.toString()}>{props.name}</CostumLink>
    </div>
  );
};

export default UserName;
