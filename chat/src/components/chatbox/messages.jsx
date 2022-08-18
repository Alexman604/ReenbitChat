import "./messages.css";

const Messages = ({ ...props }) => {
  const messagelist = props.messages.map((item, index) => {
    return (
      <>
        <div className="message">
          <img src={props.img} alt="" />
          <div className="text-container">
            <span className="msg"> {item.msg}</span>
            <span className="data"> {item.date} </span>
          </div>
        </div>
      </>
    );
  });
  return <>{messagelist}</>;
};

export default Messages;
