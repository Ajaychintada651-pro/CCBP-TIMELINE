import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {item} = props

  return (
    <div className="course-card-bg-cont">
      <div className="course-top-cont">
        <h1>{item.courseTitle}</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <AiFillClockCircle style={{marginTop: '19px'}} />
          <p>{item.duration}</p>
        </div>
      </div>
      <p>{item.description}</p>
      {item.tagsList.map(eachTag => (
        <button type="button" key={eachTag.id} className="tag-names">
          {eachTag.name}
        </button>
      ))}
    </div>
  )
}

export default CourseTimelineCard
