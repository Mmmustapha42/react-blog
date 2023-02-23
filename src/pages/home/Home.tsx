import { Header } from '../../components/header/Header'
import { Post } from '../../components/posts/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './home.css'

export const Home = () => {
  return (
    <>
        <Header/>
        <div className="home">
          <Post/>
          <Sidebar/>
        </div>
        
    </>
  )
}
