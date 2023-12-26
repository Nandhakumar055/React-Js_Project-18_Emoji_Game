import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score"> Score: {currentScore}</p>
          <p className="top-score"> Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
