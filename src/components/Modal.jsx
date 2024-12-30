import "./Modal.css";

export const Modal = ({ isOpen, closeModal }) => {
  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Fill in Your Details</h2>
            <form className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-group">
                <label>Title</label>
                <select>
                  <option value="">Select title...</option>
                  <option value="Artificial Intelligence Engineer">
                    Artificial Intelligence Engineer
                  </option>
                  <option value="Back End Developer">Back End Developer</option>
                  <option value="Cloud Architect">Cloud Architect</option>
                  <option value="Cybersecurity Specialist">
                    Cybersecurity Specialist
                  </option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Database Engineer">Database Engineer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Front End Developer">
                    Front End Developer
                  </option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="IT Consultant">IT Consultant</option>
                  <option value="IT Project Manager">IT Project Manager</option>
                  <option value="IT Support Specialist">
                    IT Support Specialist
                  </option>
                  <option value="Machine Learning Engineer">
                    Machine Learning Engineer
                  </option>
                  <option value="Mobile Application Developer">
                    Mobile Application Developer
                  </option>
                  <option value="Network Engineer">Network Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Systems Analyst">Systems Analyst</option>
                  <option value="Technical Writer">Technical Writer</option>
                  <option value="UX/UI Designer">UX/UI Designer</option>
                </select>
              </div>
              <div className="form-group cv-upload">
                <label>Upload CV</label>
                <button type="button" className="cv-btn">
                  + Add your CV
                </button>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
              </div>
            </form>
            <button className="close-modal-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
