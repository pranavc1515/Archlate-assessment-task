import React from "react";
import jobimg1 from ".././Images/image1.png";
import jobimg2 from ".././Images/share.png";
import jobimg3 from ".././Images/bookmark.png";
import lighting from ".././Images/lighting.png";
import dollar from ".././Images/dollar.png";
import star from ".././Images/star.png";
import location from ".././Images/location.png";
import lighting2 from ".././Images/lighting2.png";
import man from ".././Images/man.png";
import email from ".././Images/email.png";
import arrow from ".././Images/arrow.png";
import infostar from ".././Images/infostar.png"
import infoshare from ".././Images/infoshare.png"
import "./jobs.css";
const Jobs = () => {
  return (
    <div>
      <section>

        <div className="toph1">
          <img className="topimg" src={arrow}></img> 
          <h1>Back to jobs</h1>
           </div>
        <div className="jobs-container">
          <div className="jobs-Cards">
            <div className="jobs-Card">
              <div className="jobs-style">
                <div className="img-div">
                  <div className="jobimg1">
                    <img className="jobimg2" src={jobimg1}></img>
                  </div>
                  <div className="Architectural-div">
                    <strong>Architectural Designer</strong>
                    <p>Black Mountain Architecture</p>
                    <h7 className="date">Posted 07/27/2022</h7>
                  </div>
                </div>
                <div className="jobs-btnmain">
                  <button className="jobs-btn1">Architecture</button>
                  <button className="jobs-btn2">Freelance</button>
                  <button className="jobs-btn3">Long-term</button>
                </div>
              </div>
              <div className="status-section">
                <div className="status-img">
                  <img className="status-img2" src={jobimg2}></img>
                  <img className="status-img3" src={jobimg3}></img>
                </div>
                <div className="status-applicationdiv">
                  <p className="status-application">
                    Status: Accepting Applications
                  </p>
                </div>
                <div className="apply-btn">
                  <button className="jobs-btn4">Apply on Archslate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mini-section">
          <div className="mini-container">
            <div className="mini-items">
              <h3>
                <img className="mini-img1" src={lighting}></img>Software Skills
              </h3>
              <div className="mini-btnmain">
                <button className="mini-btn1">
                  <img  src={lighting2}></img>Rhino
                </button>
                <button className="mini-btn2">Sketchup</button>
              </div>
              <div>
                <button className="mini-btn3">Vectorworks</button>
              </div>
            </div>
            <div className="mini-items">
              <h3>
                <img className="mini-img2" src={star}></img>Experience
              </h3>
              <p>
                Associate <br /> 3+ years
              </p>
            </div>
            <div className="mini-items">
              <h3>
                <img className="mini-img3" src={dollar}></img>Rate
              </h3>
              <p> $55-$65/hour</p>
            </div>
            <div className="mini-items">
              <h3>
                <img className="mini-img4" src={location}></img>Location
              </h3>
              <p>
                Bozeman , MT <br /> USA
              </p>
              <button className="last-btn">On-site</button>
            </div>
          </div>
        </div>

        <div className="info-section">
          <div className="info-container">
            <div className="info-padding">
                <h3>About This role</h3>
                <p>
                  Short overview about job and the way that the candidate would
                  fit into the company. Can also <br/> include extra instructions for
                  the application process if any exist.
                </p>
              </div>
              <div>
                <h3>Responsibities</h3>
                <ul>
                  <li>•  specific day to day taks</li>
                  <li>• deliverables</li>
                  <li>• work environment requirements</li>
                  <li>• role within the current team</li>
                  <li>• etc.</li>
                </ul>
              </div>
              <div>
                <h3>Skills</h3>
                <ul>
                  <li>• software skills</li>
                  <li>• technical skills</li>
                  <li>• soft skills</li>
                  <li>• other</li>
                </ul>
              </div>
              <div>
                <h3>Qualification</h3>
                <ul>
                  Required
                  <li>• education</li>
                  <li>• licenses and certifications</li>
                  <li>• experience needed</li>
                </ul>
              </div>
              <div>
                <ul>
                  Bonus
                  <li>• education</li>
                  <li>• licenses and certifications</li>
                  <li>• experience neede</li>
                </ul>
              </div>
              <div>
                <h3>Rate</h3>
                <ul>
                  <li>• if available</li>
                </ul>
              </div>
              <div>
                <h3>Time Estimate</h3>
                <ul>
                  <li>• if available</li>
                </ul>
              </div>
              <div>
                <h3>Work Autoriation</h3>
                <ul>
                  <li>• tbh</li>
                </ul>
              </div>
              <div>
                <h3>About Company</h3>
                <p>
                  Description of company with any uniform info or disclaimers -
                  equal hiring <br/> opportunity, etc.
                </p>
            </div>
            <div className="info-btn">
              <button className="info-btn1">Apply on Archslate</button>
              <button className="info-btn2"><img className="info-img1" src={infostar}></img>Save</button>
              <button className="info-btn3"><img className="info-img1" src={infoshare}></img>Share & Refer</button>
            </div>
          </div>



          <div className="last-section">
          <div className="last-container">
            <div>
              <h3>Job Poster</h3>
            </div>
            <div className="last-img1">
              <img className="lastimg-man" src={man}></img>
              <div className="johnCarlos">
                <p>John Carlos</p>
                <h7>Project Manager</h7>
              </div>
            </div>
            <div>
              <button className="last-btn1"><img className="lastbtn1-img" src={email}></img>Message</button>
            </div>
          </div>

        </div>
        </div>
        
      </section>
    </div>
  );
};

export default Jobs;
