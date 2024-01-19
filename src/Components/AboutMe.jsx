import React from 'react';
import profile from './assets/profile.png'
import email from './assets/email.png'
import phone from './assets/phone.png'
import education from './assets/education.png'
import resume from './assets/resume.png'
import file from './assets/Chanmin Lee - Resume.pdf'

export default function AboutMe() {

    return (
        <div className="aboutMe">
            <p className="about-title">ABOUT ME</p>
            <div className="about-content">
                <div className="about-info">
                    <div className="info">
                        <div className="info-image">
                            <img src={profile} alt="profile"/>
                        </div>
                        <div className="info-detail">
                            <h3>Name</h3>
                            <h5>Andrew Lee</h5>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-image">
                            <img src={email} alt="email"/>
                        </div>
                        <div className="info-detail">
                            <h3>Email</h3>
                            <h5>lee.chanmin1@gmail.com</h5>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-image">
                            <img src={phone} alt="phone"/>
                        </div>
                        <div className="info-detail">
                            <h3>Phone</h3>
                            <h5>587-938-2657</h5>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-image">
                            <img src={education} alt="education"/>
                        </div>
                        <div className="info-detail">
                            <h3>Education</h3>
                            <h5>Computer Programming</h5>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-image">
                            <img src={resume} alt="resume"/>
                        </div>
                        <div className="info-detail">
                            <a href={file} download={file}><h3>Resume</h3></a>
                        </div>
                    </div>
                </div>
                <div className="intro-container">
                    <p className="introduction">As a <strong>junior developer</strong>, I specialize in both <strong>front-end and back-end technologies</strong>.
                        My hands-on approach to learning has equipped me to create efficient, user-friendly solutions.
                        I am driven by a commitment to <strong>continuous improvement</strong>, staying current with industry trends, and evolving my skills to <strong>contribute effectively</strong> to organizational success.
                    </p>
                </div>
            </div>
        </div>
    )
}