import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import {Users} from '../../data'
import FriendList from '../friendList/FriendList'
import './leftbar.css'

function Leftbar() {
  return (
    <div className='leftbar'>
    <div className='leftbarWrapper'>
    <ul className='lefbtbarList'>
    <li className='leftbarListItems'>
    <RssFeed className='leftbarIcon'/>
    <span className='leftbarItemText'>feed</span>
    </li>
    <li className='leftbarListItems'>
    <Chat className='leftbarIcon'/>
    <span className='leftbarItemText'>Chats</span>
    </li>
    <li className='leftbarListItems'>
    <PlayCircleFilledOutlined className='leftbarIcon'/>
    <span className='leftbarItemText'>Videos</span>
    </li>
    <li className='leftbarListItems'>
    <Group className='leftbarIcon'/>
    <span className='leftbarItemText'>Groups</span>
    </li>
    <li className='leftbarListItems'>
    <Bookmark className='leftbarIcon'/>
    <span className='leftbarItemText'>Bookmarks</span>
    </li>
    <li className='leftbarListItems'>
    <HelpOutline className='leftbarIcon'/>
    <span className='leftbarItemText'>Questions</span>
    </li>
    <li className='leftbarListItems'>
    <WorkOutline className='leftbarIcon'/>
    <span className='leftbarItemText'>Jobs</span>
    </li>
    <li className='leftbarListItems'>
    <Event className='leftbarIcon'/>
    <span className='leftbarItemText'>Events</span>
    </li>
    <li className='leftbarListItems'>
    <School className='leftbarIcon'/>
    <span className='leftbarItemText'>Courses</span>
    </li>
    </ul>
    <button className='leftbarButton'>Show more</button>
    <hr className='leftbarHr'/>
    <ul className='leftbarFriendList'>
    {Users.map((u)=>(
      <FriendList key={u.id} user={u}/>
    ))}
    </ul>
    </div>
    </div>
  )
}

export default Leftbar