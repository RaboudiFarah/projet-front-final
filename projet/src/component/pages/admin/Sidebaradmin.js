import "./sidebaradmin.css";


import {
  LineStyle,

  TrendingUp,
  PermIdentity,
  Storefront,
 
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";



export default function Sidebaradmin() {
  return (
    <div className="sidebaradmin">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
       
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            
              <li className="SidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            
           
              <li className="SidebarListItem">
                <Storefront className="sidebarIcon" />
               student list 
              </li>
            
            <li className="SidebarListItem">
            <Storefront className="sidebarIcon" />
            Professor list 
            </li>
           
          <li className="SidebarListItem">
          
          <Storefront className="sidebarIcon" />

      Edit user
      </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="SidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="SidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="SidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="SidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
           
            <li className="SidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}