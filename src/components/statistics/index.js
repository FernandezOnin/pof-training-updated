import { Padding } from "@mui/icons-material";
import "../../assets/styles/statistics.css"
import Bottom from "../navigations/Bottom";
import Top from "../navigations/Top";
import Graph from "./graph";
import Lists from "./list";
import Reports from "./reports";



function Statistics() {
    return (
      <div >
        <div className="Statistics">
          <Top/>
          <div>
            <div className="statistics-header-1">Statistics</div>
            <div className="statistics-header-2">
              <div>My Country</div>
              <div>Global</div>
            </div>
            <div>
              <Lists/>
            </div>
            <div>
              <Reports/>
            </div>
          </div>
          <div>
            <Graph/>
          </div>
        </div>
        <div>
            <Bottom/>
        </div>
      </div>
    );
  }
  
  export default Statistics;
  