import React from 'react'
import CourseModule from './CourseModule'
import VideoTabs from './VideoTabs'
import VideoPlayer from './VideoPlayer'

function CourseDetails() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <VideoPlayer />
            <VideoTabs />
          </div>
          <div className="col-md-4">
            <CourseModule />
          </div>
        </div>
      </div>
    </>
  )
} 

export default CourseDetails