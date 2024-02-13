import { GlobalStylesInstance } from '@/DATA/settings/Global'
import React from 'react'

export default function Second_semester() {
  return (
    <div className="changeable">
    <h3 className="Course_type" style={GlobalStylesInstance._H3}>Second Semeter: </h3>
    <ol className="course_subjects">
      <li className="first_semester_course_subjects">Introduction to Programming-2</li>
      <li className="first_semester_course_subjects">Computer Literacy:VBA</li>
      <li className="first_semester_course_subjects">Applied mathematics</li>
      <li className="first_semester_course_subjects">Communication skills</li>
      <li className="first_semester_course_subjects">Religious studies</li>
    </ol>
  </div>
  )
}
