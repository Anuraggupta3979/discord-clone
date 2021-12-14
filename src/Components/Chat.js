import React, { useEffect, useState } from "react";
import "./Chat.css";
import Messages from "./Messages";
import Chatheader from "./Chatheader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectChannelId, selectChanneName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import firebase from "firebase";
function Chat() {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChanneName);
  const [input, setInput] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setmessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="chat">
      <Chatheader channelName={channelName}></Chatheader>
      <div className="chat__messages">
        {messages.map((message) => (
          <Messages
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          ></Messages>
        ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large"></AddCircleIcon>
        <form>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />

          <button
            disabled={!channelId}
            type="submit"
            className="chat__inputButton"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon></CardGiftcardIcon>
          <GifIcon></GifIcon>
          <EmojiEmotionsIcon></EmojiEmotionsIcon>
        </div>
      </div>
    </div>
  );
}

export default Chat;
