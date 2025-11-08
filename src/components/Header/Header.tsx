import './Header.css'
import Logo from '../../assets/logo.svg'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        onClick={() => navigate('/')}
        src={Logo}
        alt="React Cards Logo"
        width="44"
        height="44"
      />
      <div className="header-actions">
        <Button onClick={() => navigate('/add-question')}>Add</Button>
        <Button>Sign in</Button>
      </div>
    </header>
  )
}

export default Header