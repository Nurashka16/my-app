import React from "react";
import { connect } from "react-redux";
import Mail from "./Mail";
import { getStateContacts } from "../Common/Selector";

const MailContainer = (props) => {
  return (
    <div>
      <Mail contacts={props.contacts} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: getStateContacts(state),
  };
};

export default connect(mapStateToProps)(MailContainer);
