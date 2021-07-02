import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import DashboardToggle from './dashboard/DashboardToggle';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  const [height, setHeight] = useState(0);
  const topSidebarRef = useRef();

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join converstaion</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
