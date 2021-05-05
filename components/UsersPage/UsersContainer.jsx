import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import s from "./users.module.css";
import Users from "./Users";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redax/users-reduser";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

//const mapDispatchToProps = (dispatch) => {
//  return {
//    follow: (userId) => {
//      dispatch(followAC(userId));
//    },
//    unfollow: (userId) => {
//      dispatch(unfollowAC(userId));
//    },
//    setUsers: (users) => {
//      dispatch(setUsersAC(users));
//    },
//    setCurrentPage: (pageNumber) => {
//      dispatch(setCurrentPageAC(pageNumber));
//    },
//    setTotalUsersCount: (isFetching) => {
//      dispatch(setTotalUsersCountAC(isFetching));
//    },
//    toggleIsFetching: (totalCount) => {
//      dispatch(toggleIsFetchingAC(totalCount));
//    }
//  };
//};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer);
