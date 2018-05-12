import React, { Component, Fragment } from "react";

import "./Notepad.css";

class Notepad extends Component {
  render() {
    return (
      <Fragment>
        <div className="editorInnerContainer">
          <div className="editorTop">
            <div className="title">
              <input
                type="text"
                placeholder="Add a title"
                disabled={true}
                value={"Title"}
              />
            </div>
            <div className="tools">
              <a id="edit" href="" title="Edit this note">
                <i className="fas fa-pencil-alt" />
              </a>
              <a id="delete" href="" title="Delete this note">
                <i className="fas fa-trash-alt" />
              </a>
              <a id="download" href="" title="Download this note">
                <i className="fas fa-download" />
              </a>
              <a id="share" href="" title="Share this note">
                <i className="fas fa-share-square" />
              </a>
              <a id="close" href="" title="Close this note">
                <i className="fas fa-times" />
              </a>
            </div>
          </div>
          <div className="editorBody">
            <textarea
              placeholder="Write Something.."
              disabled={true}
              value={`I am some paragraph\nI am line two of the paragraph`}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notepad;
