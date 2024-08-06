import { Component } from "react";
import './About.css';

class Profile extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <div className="profile">
          <div className="profile-card">
            <img src="photo2.jpg" alt="Ryan Potts" className="profile-pic"/>
            <h2>Ryan Potts</h2>
            <p>Hi, I'm Ryan Potts, a passionate developer with a love for coding and solving problems. Check out my projects on GitHub!</p>
            <a href="https://github.com/RyanCPotts" target="_blank" rel="noopener noreferrer" className="profile-link">My Github</a>
          </div>
          <div className="profile-card">
            <img src="photo1.jpg" alt="Qilin Xie" className="profile-pic"/>
            <h2>Qilin Xie</h2>
            <p>Hi, I'm Qilin Xie. I'm excited about creating innovative solutions and learning new technologies. Feel free to explore my work on GitHub!</p>
            <a href="https://github.com/QILINXIE02" target="_blank" rel="noopener noreferrer" className="profile-link">My Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
