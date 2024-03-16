import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { pdfjs } from "react-pdf"; // Ajout de l'import pour pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
import { faCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faCircle);
function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
