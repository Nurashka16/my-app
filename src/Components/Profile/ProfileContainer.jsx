import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  /*componentDidMount() {/*
    this.props.setIsFetching(true);*//*
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=1
          &pageSize=1`
      )
      .then((response) => {/*
        this.props.setIsFetching(false);*//*
        console.log(response);
        this.props.setUser(response.data.data);
      });
  }*/
  render() {
    <Profile profilePage={this.profilePage} />;
  }
}
let mapStateToProps = (state) => {
  profilePage: state.profilePage;
};
export default connect(mapStateToProps, setUser)(ProfileContainer);
