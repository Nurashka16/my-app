import React from "react";
import { connect } from "react-redux";
import Mail from "./Mail";

export const MailContainer = (props) => {
  const contacts = props.contacts.map((item) => {
    return <div>{item.fullName}</div>;
  });
  return (
    <div>
      <Mail contacts={props.contacts} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: state.dialogsPage.contacts,
  };
};

export default connect(mapStateToProps)(MailContainer);
