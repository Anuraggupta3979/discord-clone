import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import "./SidebarChannels.css";
function SidebarChannels({ id, channelName }) {
  const dispatch = useDispatch();
  console.log(id.id);
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id.id,
            channelName: id.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {id.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannels;
