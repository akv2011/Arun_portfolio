import React from "react";
import multiAgentAi from '../assets/images/multi-agent-ai.png';
import mcpServers from '../assets/images/mcp-servers.webp';
import siriCursor from '../assets/images/siri-cursor.jpg';
import linkedinSourcing from '../assets/images/linkedin-sourcing.png';
import propalAi from '../assets/images/propal-ai.jpg';
import defiAi from '../assets/images/defi-ai.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/akv2011/Multi-Agent-Agriculture-Systems" target="_blank" rel="noreferrer">
                    <img src={multiAgentAi} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Multi-Agent Agriculture Systems</h2>
                </a>
                <p><strong>Agricultural Intelligence</strong> - Comprehensive AI-powered agricultural system featuring real-time analytics, crop monitoring, and 7 specialized agents for farming operations with modern Tailwind CSS UI.</p>
                <p><strong>Tech:</strong> Python, JavaScript, Multi-Agent Systems, Tailwind CSS, Agricultural Analytics</p>
            </div>
                        <div className="project">
                <a href="https://github.com/akv2011/DefiAi" target="_blank" rel="noreferrer">
                    <img src={defiAi} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>DefiAi - DeFi Analytics Platform</h2>
                </a>
                <p><strong>DeFi Intelligence</strong> - Comprehensive DeFi AI application with real-time crypto analytics, sentiment analysis, and intelligent portfolio navigation. Supports Aave, Morpho, and Hyperliquid integrations.</p>
                <p><strong>Tech:</strong> Next.js, TypeScript, TailwindCSS, DeFi Protocols, AI Analytics</p>
            </div>
            <div className="project">
                <a href="https://github.com/akv2011/Automated_Siri_cursor_control" target="_blank" rel="noreferrer">
                    <img src={siriCursor} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Automated Siri Cursor Control</h2>
                </a>
                <p><strong>SMS-to-Cursor Automation</strong> - Complete SMS-to-Cursor automation system with 95% success rate. Features MCP integration, UI automation, and AI processing for seamless Cursor IDE control via SMS.</p>
                <p><strong>Tech:</strong> Python, MCP, UI Automation, Twilio, Gemini AI, Flask</p>
            </div>
            <div className="project">
                <a href="https://github.com/akv2011/Autonomous_sourcing_agent" target="_blank" rel="noreferrer">
                    <img src={linkedinSourcing} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Autonomous Sourcing Agent</h2>
                </a>
                <p><strong>LinkedIn Recruitment AI</strong> - AI-powered recruitment agent that discovers, analyzes, and creates personalized outreach for LinkedIn candidates. Features live demo on Hugging Face with 80-90% success rate.</p>
                <p><strong>Tech:</strong> Python, FastAPI, Google Gemini, Playwright, LinkedIn API</p>
            </div>
            <div className="project">
                <a href="https://github.com/akv2011/Propal_Ai" target="_blank" rel="noreferrer">
                    <img src={propalAi} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Propal AI - Voice Agent</h2>
                </a>
                <p><strong>Real-time Voice AI</strong> - AI-powered voice agent with Speech-to-Text, LLM processing, and Text-to-Speech integration. Targets sub-2 second latency with detailed metrics logging and LiveKit framework.</p>
                <p><strong>Tech:</strong> React, Next.js, TypeScript, Deepgram, Groq, ElevenLabs</p>
            </div>
            <div className="project">
                <a href="https://github.com/akv2011/API_mcp_servers_builds" target="_blank" rel="noreferrer">
                    <img src={mcpServers} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>API & MCP Server Builds</h2>
                </a>
                <p><strong>Server Infrastructure</strong> - Collection of API servers and MCP (Model Context Protocol) servers built with TypeScript and NestJS. Features secure authentication, comprehensive logging, and DeFi protocol integrations.</p>
                <p><strong>Tech:</strong> TypeScript, NestJS, MCP Protocol, Docker, API Development</p>
            </div>
        </div>
    </div>
    );
}

export default Project;