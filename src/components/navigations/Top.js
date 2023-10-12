import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DragHandleIcon from '@mui/icons-material/DragHandle';

function Top() {
    const NavBar = (type) => {
        if (type === 'menu') {
            alert('MENU TO! ❤')
        } else {
            alert('NOTIFICATION TO! ❤')
        }
    }
    return (
      <div className="top">
        <div onClick={() => NavBar('menu')}>
          <DragHandleIcon/>
        </div>
        <div onClick={() => NavBar('notification')}>
          <NotificationsNoneIcon/>
        </div>

      </div>
    );
  }
  
  export default Top;