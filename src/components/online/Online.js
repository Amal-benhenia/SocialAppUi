import './online.css'

const Online = ({user}) => {
  return (
    <div>
    <li className='onlineFriend'>
    <div className='onlineFriendImageContainer'>
    <img className='onlineFriendImage' src={user.profilePicture} alt=''/>
    <span className='onlineFriendCercle'></span>
    </div>
    <span className='onlineFriendName'>{user.profileName}</span>
    </li>
    </div>
  )
}

export default Online