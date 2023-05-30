import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
   return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
   unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }

   }
}
 
 export const UsersContainer = connect(mapStateToProps, 
   mapDispatchToProps)(Users);
export default UsersContainer;