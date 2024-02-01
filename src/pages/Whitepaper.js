import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataLoaded } from "../store/loadSlice";
import whitePaper from "../Styles/WhitePaper.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Whitepaper() {
  const dispatch = useDispatch();
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setDataLoaded(true));
    }, 3000);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="whitepaper_pdf">
      <Document
        file={whitePaper}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        className="pdf-document"
      >
        <div className="pdf-page">
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </div>
      </Document>
    </div>
  );
}
