import { GlobalStylesInstance } from '@/DATA/settings/Global'
import React from 'react'

export default function First_semester() {
  return (
    <div className="changeable">
    <h3 className="Course_type" style={GlobalStylesInstance._H3}>First Semeter: </h3>
    <ol className="course_subjects">
      <li className="first_semester_course_subjects">Introduction to Programming</li>
      <li className="first_semester_course_subjects">Math for IT</li>
      <li className="first_semester_course_subjects">English for Academic purposes</li>
      <li className="first_semester_course_subjects">Newest histroy of Uzbekistan</li>
    </ol>
  </div>
  )
}
