import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div
      style={{
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={eachItem.id} item={eachItem} />
          ) : (
            <ProjectTimelineCard key={eachItem.id} item={eachItem} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
