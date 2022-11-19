import './Message.css';

function Message(props) {
  return (
    <div className="message">
      {props.showMessage ? (
          <div>{props.message}</div>
      ) : null}
    </div>
  );
}

export default Message;
