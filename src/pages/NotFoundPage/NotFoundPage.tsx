import './NotFoundPage.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <section className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Такой страницы не существует или она была удалена.
      </p>
      <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
    </section>
  )
}

export default NotFoundPage
