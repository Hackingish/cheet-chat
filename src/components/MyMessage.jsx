const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="Message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginTight: "18px",
        color: "white",
        backgroundColor: "#00ccff",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
