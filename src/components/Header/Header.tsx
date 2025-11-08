import './Header.css'
import Logo from '../../assets/logo.svg'
import Button from '../Button'

const Header = () => {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="React Cards Logo"
        width="44"
        height="44"
      />
      <div className="header-actions">
        <Button>Add</Button>
        <Button>Sign in</Button>
      </div>
    </header>
  )
}

export default Header