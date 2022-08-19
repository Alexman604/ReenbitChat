import "./chat-header.css";

const ChatHeader = ({img, name}) => {
  return (
    <div className="chat-header">
      <img src={img} alt="USerPicture" />
      <h2 className="name"> {name} </h2>
    </div>
  );
};

export default ChatHeader;
