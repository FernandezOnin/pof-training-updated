import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react"
import Ph from "../../../assets/images/ph.svg"
import Korea from "../../../assets/images/kr.svg"
import Jpn from "../../../assets/images/jp.svg"
import Chn from "../../../assets/images/cn.svg"



function Countries() {
  const [view, setView] = useState(false)
  const [selected, setSelected] = useState(0)
  const [listCountries, setCountries] = useState([
    {id: 2, name: 'Philippines', img: Ph},
    {id: 3, name: 'South Korea', img: Korea},
    {id: 4, name: 'Japan', img: Jpn},
    {id: 5, name: 'China', img: Chn},
  ])

  
  const viewHndlr = () => {
      setView(!view)      
  }

  const selectedHndlr = (id) => {
      setSelected(id)
      setView(false)
  }
  return (
    <div>
        <div className="countries" onClick={viewHndlr}>
          {
              listCountries.filter((value) => value.id === selected).length !== 0 ? (
                <div>
                  <img src={listCountries.filter((value) => value.id === selected)[0].img } width={15} height={15}  style={{marginRight:'10px'}}/>
                  {listCountries.filter((value) => value.id === selected)[0].name }
                </div>
                ) : (
                  <div> <img src={Ph} width={15} height={15} style={{marginRight:'10px'}} />Philippines</div>
                )
          }
          <ArrowDropDownIcon/>
        </div>
        {
          view === true && (
            <div className="countries-1">
              {
                listCountries.map((v,k) => (
                  <div key={k} onClick={() => selectedHndlr(v.id)}><img src={v.img} width={15} height={15}/> {v.name}</div>
                ))
              }
            </div>
          )
        }
    </div>
    );
  }
  export default Countries;
  