import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom"

function Bottom() {
    return (
      <div className= "bottom-nav">
        <button >
            <Link to="/"><HomeIcon sx={{fontSize:30, color:"#aeb1d8" }} /> </Link> 
        </button>
        <button>
            <Link to="/statistics"><AssessmentIcon sx={{fontSize:30, color:"#aeb1d8"}}/> </Link> 
        </button>
        <button>
          <Link to="/data"><ListAltIcon sx={{fontSize:30, color:"#aeb1d8"}}/></Link>
        </button>
        <button>
          <Link to="/information"><InfoIcon sx={{fontSize:30, color:"#aeb1d8"}}/></Link>
        </button>
      </div>
    );
  }
  
  export default Bottom;