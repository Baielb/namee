import './Header.scss'
import Logo from '../../assets/logo.svg'
import yTube from "../../assets/utub.svg"
import inst from "../../assets/inst.svg"
import wapp from "../../assets/watsap.svg"
import Button from '../UI/Button/Button'

const Header = () => {
  return (
    <header >
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='socials'>
        <img src={yTube} alt="" />
        <img src={inst} alt="" />
        <img src={wapp} alt="" />
      </div>
      <div className='header-buttons'>
      <Button>Sign In </Button>
      <Button bgcolor="#3ab67d" color='#fff'> Sign Up </Button>
      </div>
    </header>
  )
}

export default Header