import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "LangGraph",
    "Keras",
    "Computer Vision",
    "CNNs",
    "LSTMs",
    "GANs",
    "RAG",
    "Local LLMs"
];

const labelsSecond = [
    "FastAPI",
    "Flask",
    "React",
    "JavaScript",
    "TypeScript",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Linux",
    "Git"
];

const labelsThird = [
    "AWS",
    "GCP",
    "Azure",
    "Vertex AI",
    "Cloud Functions",
    "Pub/Sub",
    "BigQuery",
    "Cloud Run",
    "Docker"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Machine Learning & AI</h3>
                    <p>I specialize in building advanced AI systems including deep learning models, computer vision applications, and LLM-powered solutions. I have professional experience with PyTorch, TensorFlow, and implementing RAG pipelines for real-world applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I build scalable backend systems and APIs using modern frameworks like FastAPI and Flask. I have experience creating microservices that handle high-throughput applications and real-time data processing systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>I deploy and scale applications on major cloud platforms including AWS, GCP, and Azure. I have experience with containerization, serverless architectures, and building automated CI/CD pipelines for machine learning workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;