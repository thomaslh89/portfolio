import React from "react";
import Style from "./Resume.module.scss";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import samplePDF from "../../assets/Resume.pdf";

export default function Resume() {
  const firstName = info.firstName.toLowerCase();

  function downloadPDF() {
    window.open(samplePDF, "_blank");
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"3rem"}
    >
      {/* Pour les petits écrans (mobiles) */}
      <div className={Style.mobileContainer}>
        <button className={Style.downloadButton} onClick={downloadPDF}>
          Download Resume{" "}
        </button>
      </div>

      {/* Pour les écrans plus grands (tablettes et ordinateurs) */}
      <div className={Style.desktopContainer}>
        <div className="dox">
          <embed
            src={samplePDF}
            type="application/pdf"
            width="1000px"
            height="1000px"
          />
        </div>
        <button className={Style.downloadButton} onClick={downloadPDF}>
          Download Resume
        </button>
      </div>
    </Box>
  );
}
