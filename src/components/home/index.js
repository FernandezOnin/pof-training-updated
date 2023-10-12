import "../../assets/styles/home.css"
import Top from "../navigations/Top";
import Contacts from "./contacts";
import Prevention from "./prevention";
import Banner from "./Banner";
import Bottom from "../navigations/Bottom";



function Home() {
    return (
      <div>
        <div className="home-header-1">
          <Top/>
          <Contacts/>
        </div>
        <div className="home-header-2">
            <b><Prevention/></b>
        </div>
        <div>
          <Banner/>
        </div>
        <div>
          <Bottom/>
        </div>
      </div>
      
    );
  }
  
  export default Home;
  