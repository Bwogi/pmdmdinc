import './navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <div className='navbar'>
          <div className="wrapper">
              <div className="left">
                  <div className="item"><Link to='/'><img src='/img/logo.jpg' alt="logo" /></Link> </div>
              </div>
              <div className="center"></div>
              <div className="right"></div>
          </div>
    </div>
  )
}
