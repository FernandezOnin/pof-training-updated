import Avoid from "../../../assets/images/MicrosoftTeams-image (8).png"
import Clean from "../../../assets/images/MicrosoftTeams-image (9).png"
import Wear from "../../../assets/images/MicrosoftTeams-image (10).png"

const List = () => {
    const list = [
        {img:Avoid, label: "Avoid close contact"},
        {img:Clean, label: "Clean your hands often"},
        {img:Wear, label: "Wear a facemask"},
    ]
    return (
        <div className="container">
            {list.map((v,k) => (
            <div className="images" key={k}>
                <img src={v.img} alt={v.label}/>
                <div>{v.label}</div>
            </div>
        ))}
        </div>
    );
  }
  
  export default List;