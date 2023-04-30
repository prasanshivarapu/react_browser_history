import './index.css'

const Itemsearch = props => {
  const {itemresult, deleteuser} = props
  const {title, timeAccessed, logoUrl, domainUrl, id} = itemresult
  const deletebutton = () => {
    deleteuser(id)
  }

  return (
    <div className="greet11">
      <div className="greet22">
        <p className="time">{timeAccessed}</p>
        <div className="imagep">
          <img src={logoUrl} alt="logo" className="image11" />
        </div>

        <p className="title">{title}</p>
        <div className="greet12">
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <div className="button11">
        <button type="button" onClick={deletebutton}>
          del
        </button>
      </div>
    </div>
  )
}

export default Itemsearch
