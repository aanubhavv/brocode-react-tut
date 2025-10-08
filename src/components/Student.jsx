import PropTypes from 'prop-types'

function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propType = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// Before react 19+

// Student.defaultProps = { 
//     name: "Guest",
//     age: 0,
//     isStudent: false
// }

export default Student