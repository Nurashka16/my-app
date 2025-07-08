import React from "react";
import { connect } from "react-redux";
import style from './Mail.module.css'

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
