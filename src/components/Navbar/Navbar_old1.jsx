import './navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item"><Link to='/products/1'>Products</Link> <KeyboardArrowDownIcon /></div>
          <div className="item"><Link to='/products/2'>Accessories</Link> </div>
          <div className="item"><Link to='/partners'>Partners</Link> </div>
          <div className="item"><Link to='/blog'>Blog</Link> </div>


        </div>
        <div className="center">
          <div className="item"><Link to='/'><img src='/img/logo.jpg' alt="logo" /></Link> </div>

        </div>
        <div className="right">
        <div className="item"><Link to='/'>Home</Link> </div>
        <div className="item"><Link to='/about'>About</Link> </div>
        <div className="item"><Link to='/contact'>Contact</Link> </div>
          <div className="item"><Link to='/store'>Store</Link> </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
