//export default function DialogsConteiner(props) {
  let state = props.store.getState().dialogPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  let onNewMessageChange = (newMessageText) => {
    props.store.dispatch(updateNewMessageBodyCreator(newMessageText));
  };

//  return (
    <Dialogs
      onSendMessageClickBody={onSendMessageClick}
      dialogPage={state}
      updateNewMessageBody={onNewMessageChange}
    />
  );
}
