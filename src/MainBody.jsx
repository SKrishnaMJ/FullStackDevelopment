import Students from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";

class MainBody extends React.Component {
  
    render() {
      const whatWeWillLearn = "React.js"
      const lectureCount = 3
  return(
  <div style={{minHeight:"70vh"}}>
  <p>In this course, we will learn {whatWeWillLearn} by building TaskoPedia</p>
  <p>Lecture Count - {lectureCount}</p>
    <ul>
      <li>Call Ben</li>
      <li>Go to Walmart</li>
    </ul>
    {/* <div>Enter Task : {<input placeholder='Sai' maxLength={6} readOnly></input>}</div> */}
    <div className='row'>Students Enrolled</div>
  <Students expirence={2} name="Frank Lampard" headShot="https://api.lorem.space/image/face?w=150&h=150"> <StudentReview/> </Students>
  <Students expirence={6} name="Eden Hazard" headShot="https://api.lorem.space/image/face?w=150&h=152" > <StudentReview/> </Students>
  <Students expirence={3} name="Didier Drogba" headShot="https://api.lorem.space/image/face?w=150&h=153"/>
  </div>
  )
}
}

  export default MainBody;