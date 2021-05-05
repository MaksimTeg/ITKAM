import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redax/dialogs-reducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchTpProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchTpProps)(Dialogs);

export default DialogsContainer;
