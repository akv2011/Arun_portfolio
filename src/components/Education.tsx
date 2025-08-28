import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss';

function Education() {
    return (
        <div className="education-container" id="education">
            <div className="education-content">
                <h1>Education & Achievements</h1>
                
                <div className="education-section">
                    <div className="education-item">
                        <FontAwesomeIcon icon={faGraduationCap} size="2x" className="education-icon"/>
                        <div className="education-details">
                            <h3>Bachelor of Engineering in Computer Science</h3>
                            <h4>Anna University Chennai, India</h4>
                            <p className="education-period">May 2022 – Present</p>
                            <p className="education-gpa">CGPA: 9.02/10</p>
                        </div>
                    </div>
                </div>

                <div className="achievements-section">
                    <h2><FontAwesomeIcon icon={faTrophy} className="trophy-icon"/> Achievements</h2>
                    <div className="achievements-grid">
                        <div className="achievement-item">
                            <h4>🏆 Smart India Hackathon (SIH) 2023 Winner</h4>
                            <p>National Level</p>
                        </div>
                        <div className="achievement-item">
                            <h4>🥈 Smart India Hackathon (SIH) 2024 Runner-Up</h4>
                            <p>National Level</p>
                        </div>
                        <div className="achievement-item">
                            <h4>🥉 IHNA Australia Hackathon 2024</h4>
                            <p>2nd Runner-Up – International</p>
                        </div>
                        <div className="achievement-item">
                            <h4>🥈 IIT Roorkee Power System Cybersecurity Hackathon</h4>
                            <p>Runner Up - 2024</p>
                        </div>
                        <div className="achievement-item">
                            <h4>🏅 AWS Zelestra Machine Learning Hackathon</h4>
                            <p>5th Place – International</p>
                        </div>
                        <div className="achievement-item">
                            <h4>🥉 SBI Life Hackathon</h4>
                            <p>3rd Place – National</p>
                        </div>
                    </div>
                </div>

                <div className="certifications-section">
                    <h2>📜 Certifications</h2>
                    <div className="certifications-list">
                        <div className="cert-item">
                            <h4>Machine Learning Specialization</h4>
                            <p>Stanford University (Coursera)</p>
                        </div>
                        <div className="cert-item">
                            <h4>Deep Learning Specialization</h4>
                            <p>DeepLearning.AI (Coursera)</p>
                        </div>
                        <div className="cert-item">
                            <h4>AWS Certified: Machine Learning – Specialty (MLS-C01)</h4>
                            <p>Amazon Web Services</p>
                        </div>
                        <div className="cert-item">
                            <h4>Google Cloud Certified – Generative AI Leader</h4>
                            <p>Google Cloud (May 2025)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
