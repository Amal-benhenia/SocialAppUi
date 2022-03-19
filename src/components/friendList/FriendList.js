import './friendList.css'


const FriendList = ({user}) => {
  
  return (
      <div>
    <li className='leftbarFriend'>
    <img className='leftbarFriendImage' src={user.profilePicture} alt=''/>
    <span className='leftbarFriendName'>{user.profileName}</span>
    </li>
    </div>
  )
}

export default FriendList