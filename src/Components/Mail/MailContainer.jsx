import Mail from "./Mail";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

export const MailContainer = (props) => {
  console.log(props.state);
  return (
    <Mail
      dialogsPage={props.dialogsPage}
      lastDialog={props.lastDialog}
      contacts={props.contacts}
    />
  );
};

export default connect(mapStateToProps)(MailContainer);
