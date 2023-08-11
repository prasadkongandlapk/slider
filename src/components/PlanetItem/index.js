import './index.css'

const PlanetItem = props => {
  const {planetInfo} = props
  const {name, imageUrl, description} = planetInfo

  return (
    <li>
      <div className="row">
        <img className="img" src={imageUrl} alt={name} />
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default PlanetItem
