import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { FaCloudDownloadAlt, FaDatabase, FaCogs, FaRobot, FaPlug, FaSitemap } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Work Domain</span>
        </h4>
        <h1>What I Build</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"AI-Powered Application Development"}
            disc={`I build production-grade AI applications by integrating model intelligence with robust backend and user-focused frontend systems.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={GiArtificialIntelligence}
            title={"AI/ML (Computer Vision)"}
            disc={`I design and deploy ML and Computer Vision solutions for tasks such as detection, classification, automation, and decision support.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={MdOutlineGeneratingTokens}
            title={"Gen AI"}
            disc={`I create GenAI features using LLMs, prompt engineering, RAG pipelines, and agent workflows to improve product capabilities.`}
          />
        </Slide>
        
        <Slide direction="right">
          <Card
            Icon={FaCloudDownloadAlt}
            title={"Technical Leadership"}
            disc={`As a GenAI Technical Lead, I drive solution architecture, delivery execution, and engineering mentorship for AI-first products.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FaDatabase}
            title={"RAG Applications"}
            disc={`I build Retrieval-Augmented Generation systems with robust indexing, ranking, and context orchestration for accurate enterprise answers.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaCogs}
            title={"Model Fine-Tuning"}
            disc={`I fine-tune domain-specific models and optimize training workflows to improve quality, latency, and cost-performance trade-offs.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={FaRobot}
            title={"Agentic Applications"}
            disc={`I develop autonomous and human-in-the-loop AI applications where agents plan tasks, use tools, and execute multi-step workflows.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaPlug}
            title={"MCP Integration"}
            disc={`I design and integrate Model Context Protocol servers so AI systems can securely access tools, data sources, and enterprise workflows.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FaSitemap}
            title={"Agentic System Design"}
            disc={`I architect scalable agentic systems with observability, guardrails, memory strategy, and evaluation loops for production readiness.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
