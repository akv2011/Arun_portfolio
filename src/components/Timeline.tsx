import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer (Scalability & Agent Development)</h3>
            <h4 className="vertical-timeline-element-subtitle">CompasIQ | Remote</h4>
            <p>
              Engineered FastAPI microservices processing 50k+ daily compliance checks across 1,400+ assets, cutting API latency to &lt;150ms. Built agent-based remediation workflows that auto-patched 200+ CVEs/month with rollback support, reducing manual effort by 70%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">National Institute of Technology, Tiruchirappalli | India</h4>
            <p>
              Built nnUNet v2 and Swin-UNETR pipelines for liver and tumor segmentation; improved Dice by 7% on LITS & ATLAS datasets. Deployed nightly retraining and inference via Vertex AI for scalable experimentation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ionic Protocol | Remote</h4>
            <p>
              Built a LangGraph-based multi-agent system for DeFi query actions, reducing latency by 30% and increasing throughput by 25%. Implemented a RAG pipeline with LangChain and FastAPI, handling 500 queries/min.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Fellowship</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre for Sponsored Research, Anna University | Chennai, India</h4>
            <p>
              Engineered a GAN-based Intrusion Detection System for IEC-61850 protocols achieving 95% accuracy. Reduced false positives by 30% using SHAP explainability techniques. Secured €15,000 research grant.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;