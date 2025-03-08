import Search from './Search'
import logo from './imgs/logo.png'

const Header = ({ onChange, onSubmit }) => {
  return (
    <header className="header">
      <hgroup>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1>Weather Application</h1>
          <h5>made by Abdulhadi Aljabban</h5>
        </div>
      </hgroup>
      <Search onChange={onChange} onSubmit={onSubmit} />
    </header>
  )
}

export default Header

