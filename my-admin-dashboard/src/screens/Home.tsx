import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex flex-6">
        <Sidebar/>
        <div className="flex-1">
            <Navbar/>
        </div>
    </div>
  )
}

export default Home