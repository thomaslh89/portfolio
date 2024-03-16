import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import samplePDF from "../../assets/Resume.pdf";
import { Document, Page } from "react-pdf";

export default function Resume() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <div className="dox">
          <Document file={samplePDF}>
            <Page className="doc" width={1000} pageNumber={1} />
          </Document>
        </div>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }
  function resumeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
      <Terminal text={resumeText()} />
    </Box>
  );
}
