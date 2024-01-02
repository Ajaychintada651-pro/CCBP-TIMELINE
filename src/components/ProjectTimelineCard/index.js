import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {item} = props
  return (
    <div className="project-card">
      <img src={item.imageUrl} alt={item.id} className="project-image" />
      <div className="project-card-top-portion">
        <h1>{item.projectTitle}</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <AiFillCalendar style={{marginTop: '19px'}} />
          <p>{item.duration}</p>
        </div>
      </div>
      <p>{item.description}</p>
      <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
