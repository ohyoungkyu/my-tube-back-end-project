import React from "react";
import VideoList from "../../components/studio/channel/VideoList";
import Layout from "../../layouts/Layout";

const Channel = () => {
  return (
    <Layout>
      <div className="flex pointer-event-auto">
        <div className="flex w-60 flex-shrink-0 border border-r-0 border-t-0 z-0">
          side menu
        </div>
        <div className="flex flex-col flex-grow z-0 border border-b-0">
          <VideoList />
        </div>
      </div>
    </Layout>
  );
};

export default Channel;
