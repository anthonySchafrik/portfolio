import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import resume from '../resume/AnthonySchafrikResume.pdf';
import './ResumePage.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  handlePageChange = num => () => {
    this.setState({ pageNumber: num });
  };

  render = () => {
    const { pageNumber, numPages } = this.state;
    const { onDocumentLoadSuccess, handlePageChange } = this;

    const width = window.innerWidth;
    const toDisplay = width <= 625 ? {} : { justifyContent: 'center' };

    return (
      <>
        <div className="ResumePageContainer" style={toDisplay}>
          <div>
            <Document
              onLoadError={console.error}
              file={resume}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>

        <div className="pageContainer" style={{ marginTop: '30px' }}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="2x"
            onClick={handlePageChange(1)}
          />

          <span className="centerWithSideSpace">
            Page {pageNumber} of {numPages}
          </span>

          <FontAwesomeIcon
            icon={faAngleRight}
            size="2x"
            onClick={handlePageChange(2)}
          />

          <a className="centerWithSideSpace" href={resume} download>
            Click to download Resume
          </a>
        </div>
      </>
    );
  };
}

export default ResumePage;
