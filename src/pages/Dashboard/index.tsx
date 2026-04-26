import Searchbar from "../../components/Searchbar"
import Sidebar from "../../components/Sidebar"
import RegisterPoint from "../../components/RegisterPoint";

function Dashboard() {

  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      <Sidebar />
      <div className="w-screen flex flex-col">
        <Searchbar />
        <RegisterPoint />
      </div>
    </div>
  )
}

export default Dashboard
