import React from 'react'
import CourseOverview from './CourseOverview'
import CourseComment from './CourseComment'
import CourseRating from './CourseRating'
import CourseNotes from './CourseNotes'

function VideoTabs() {
    return (
        <>
            <div className="row">
                <div className="col-12 d-flex flex-rows">
                    <CourseOverview /> &nbsp; &nbsp;
                    <CourseNotes /> &nbsp; &nbsp;
                    <CourseComment /> &nbsp; &nbsp;
                    <CourseRating /> &nbsp; &nbsp;
                </div>
            </div>
        </>
    )
}

export default VideoTabs