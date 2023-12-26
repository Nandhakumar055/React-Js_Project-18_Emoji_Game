import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickOnEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    clickOnEmoji(id)
  }

  return (
    <li className="emoji-card-container">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
