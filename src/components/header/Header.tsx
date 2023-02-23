import './header.css'

export const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'> React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src='https://source.unsplash.com/random' alt=''/>
    </div>
  )
}
