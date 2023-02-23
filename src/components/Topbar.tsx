import './TopBar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';

export const Topbar = () => {
  return (
    <div className='top'>
        <div className="topLeft">
            <FacebookIcon className='topIcon'/>
            <PinterestIcon className='topIcon'/>
            <TwitterIcon className='topIcon'/>
            <InstagramIcon className='topIcon'/>
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src='https://source.unsplash.com/random' alt=''/>
            <SearchIcon className='topSearchIcon'/>
        </div>
    </div>
  )
}
