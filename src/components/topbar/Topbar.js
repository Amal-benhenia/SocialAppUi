import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
    <div className='topbarLeft'>
    <Link to = '/' style={{textDecoration:'none'}}>
    <span className='logo'>Amal Social</span>
    </Link>
   
    </div>
    <div className='topbarCenter'>
    <div className='searchBar'>
    <Search className='searchIcon'/>
    <input placeholder='Search for friends' className='searchInput'/>
    </div>
    </div>
    <div className='topbarRight'>
    <div className='topBarLinks'>
    <span className='topBarLink'>Homepage</span>
    <span className='topBarLink'>Timeline</span>
    </div>
    <div className='topBarIcons'>
    <div className='topBarIconItem'>
    <Person/>
    <span className='topBarIconBadge'>1</span>
    </div>
    <div className='topBarIconItem'>
    <Chat/>
    <span className='topBarIconBadge'>3</span>
    </div>
    <div className='topBarIconItem'>
    <Notifications/>
    <span className='topBarIconBadge'>1</span>
    </div>
    </div>
    <img src="/assets/people/1.jpg" alt="me" className='topBarImage'/>
    </div>
    </div>
  )
}

export default Topbar