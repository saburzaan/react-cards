import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>header</header>
      <div className="main-wrapper">
        <main className="main">main</main>
        <footer className="footer">
          <p>
            React Question Cards Application | {new Date().getFullYear()} <br />
            by <a href="https://github.com/saburzaan" target="_blank">Zhaslanuly Sabyrzhan</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout