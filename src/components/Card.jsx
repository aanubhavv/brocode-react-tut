import profilePic from '../assets/pfp.jpeg'

function Card() {
    return (
    <div className="card">
        <img className="card-img" src={profilePic} alt="profile picture" />
        <h2 className="card-title">Anubhav Garg</h2>
        <p className="card-text">I am a student and i like to play video games</p>
    </div>
    )
}

export default Card