import React from 'react'

const Courses = ({ course, onClick }) => {
    return (
        <div>
            <h1
                onClick={() => onClick(course)}
            >
                {course.title}
            </h1>
            <img
                src={course.thumbnail_cdn}
            />
            <p>{course.description}</p>
            <p>{course.student_count}</p>
        </div>
    )
}

export default Courses
