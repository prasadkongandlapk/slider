import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg">
      <h1>Planets</h1>

      <ul>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetInfo={each} key={each.id} />
          ))}
        </Slider>
      </ul>
    </div>
  )
}
export default PlanetsSlider
