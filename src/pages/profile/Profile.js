import './profile.css'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'


const Profile = () => {
  return (
    <div>
    <Topbar/>
    <div className='profileContainer'>
    <Leftbar/>
    <div className='profileRight'>
    <div className='profileTopRight'>
    <div className='profilePictures'>
    <img className='profileCoverPicture' src='/assets/posts/3.jpg'/>
    <img className='profilePicture' src='/assets/people/1.jpg'/>
    </div>
    <div className='profileInfos'>
    <h4 className='profileInfosName'>Amal Ben Henia</h4>
    <span className='profileInfosDesc'>Hello my friends!</span>
    </div>
    </div>
    <div className='profileBottomRight'>
    <Feed/>
    <Rightbar profile/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Profile