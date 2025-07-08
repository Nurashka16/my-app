import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Title from "./Title";

const TitleContainer = (props) => {
  const dataUrl = useLocation();
  const [_, url, userIdDialog] = dataUrl.pathname.split("/");
  const userDialog = props.contacts.find((user) => {
    if (user.id == userIdDialog) {
      return user;
    }
  });

  return (
    <Title
      url={url}
      userDialog={userDialog}
      ownerFullName={props.ownerFullName}
      ownerId={props.ownerId}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: getStateContacts(state),
    ownerId: getStateOwnerId(state),
    ownerFullName: getStateOwnerFullName(state),
  };
};

export default connect(mapStateToProps)(TitleContainer);
