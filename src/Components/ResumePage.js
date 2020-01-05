import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import resume from '../resume/aSchafrikResume.pdf';
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

  render = () => {
    const { pageNumber, numPages } = this.state;

    return (
      <>
        <div className="ResumePageContainer">
          <div>
            <Document
              onLoadError={console.error}
              file={resume}
              onLoadSuccess={this.onDocumentLoadSuccess}
              scale={3}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>

        <div
          className="pageContainer"
          style={{ marginTop: pageNumber === 2 ? '30px' : 0 }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="2x"
            onClick={() => this.setState({ pageNumber: 1 })}
          />
          <span className="pageNums">
            Page {pageNumber} of {numPages}
          </span>
          <FontAwesomeIcon
            icon={faAngleRight}
            size="2x"
            onClick={() => this.setState({ pageNumber: 2 })}
          />
        </div>
      </>
    );
  };
}

export default ResumePage;
