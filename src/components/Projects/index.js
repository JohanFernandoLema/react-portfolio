import './index.scss'
import image from '../../assets/images/camping.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Projects = () => {
  return (
    <div className="wrapper">
      <div className="firstProject">
        <img src={image} alt="camping" className="project" />

        <h1> Camping Website</h1>
        <p className="paragraph">
          E-commerce application built using React, React components, along with
          Sass for UI enhancement. Website main purpose is for delivering a
          creative and interactive user experience regardless of the complex
          content the application has.
        </p>
        <Link
          to={'https://github.com/JohanFernandoLema'}
          className="linkGithub"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Link>
      </div>
    </div>
  )
}
export default Projects
