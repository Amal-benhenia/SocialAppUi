import './rightbar.css'
import {Users} from '../../data'
import Online from '../online/Online'

function Rightbar({profile}) {
  const HomeRightBar = ()=>{
    return (
      <div>
    <div className='birthdayContainer'>
    <img className='birthday' src='/assets/gift.png' alt=''/>
    <span className='birthdayText'>
    <b>Jane Smith</b> and <b>2 other friends</b> have their birthday today
    </span>
    </div>
    <img className='ad' src='/assets/ad.jpg' alt=''/>
    <h4 className='title'>Friends Online</h4>
    <ul className='onlineFriendsList'>
    {Users.map((u)=>(
      <Online key={u.id} user={u}/>
    ))}
    </ul>
    </div>
    )
  }
  const ProfileRightBar = ()=>{
    return (
      <div>
      <h4 className='rightBarTitle'>Profile Information</h4>
      <div className='rightBarInfo'>
      <div className='rightBarInfoItem'>
      <span className='rightBarInfoKey'>City:</span>
      <span className='rightBarInfoValue'> New York</span>
      </div>
      <div className='rightBarInfoItem'>
      <span className='rightBarInfoKey'>From:</span>
      <span className='rightBarInfoValue'> Tunisia</span>
      </div>
      <div className='rightBarInfoItem'>
      <span className='rightBarInfoKey'>Relationship:</span>
      <span className='rightBarInfoValue'> Single</span>
      </div>
      </div>
      <h4 className='rightBarTitle'>Friends</h4>

      <div className='rightBarFollowings'>

      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/2.jpg'/>
      <span className='rightBarFollowingName'>Jane Smith</span>
      </div>
     
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/3.jpg'/>
      <span className='rightBarFollowingName'>Sarrah Williams</span>
      
      </div>
      
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/4.jpg'/>
      <span className='rightBarFollowingName'>Jacqueline Gagnon</span>
     
      </div>
     
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/5.jpg'/>
      <span className='rightBarFollowingName'>Dave Rubin</span>
     
      </div>
     
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/6.jpg'/>
      <span className='rightBarFollowingName'>Jamal Brown</span>
     
      </div>
      
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/7.jpg'/>
      <span className='rightBarFollowingName'>Pamela Harris</span>
      
      </div>
   
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/8.jpg'/>
      <span className='rightBarFollowingName'>Greta Martin</span>
      
      </div>
      
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/9.jpg'/>
      <span className='rightBarFollowingName'>Oliver Jones</span>
     
      </div>
      
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/10.jpg'/>
      <span className='rightBarFollowingName'>Shantelle Lewis</span>
      
      </div>
      
      <div className='rightBarFollowing'>
      <img className='rightBarFollowingPicture' src='/assets/people/11.jpg'/>
      <span className='rightBarFollowingName'>Anna Anderson</span>
     
      </div>
      </div>
      </div>  
    )
  }
  return (
    <div className='rightbar'>
    <div className='rightbarWrapper'>
    { profile ? <ProfileRightBar/> : <HomeRightBar/>}
    </div>
    </div>
  )
}

export default Rightbar