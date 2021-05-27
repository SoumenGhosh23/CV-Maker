import React from 'react';

import ReactTOPdf from "react-to-pdf";

const ref = React.createRef();
const PDF = (props) => {
    return (
        <>
            <div className="background_color" >
                <div className="pdf_container" ref={ref} style={{
                    backgroundColor: "white", marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    padding: "20px 20px",
                    display: "flex",
                    flexDirection: "row",
                    height: "11in",
                    width: "8.5in",
                }}>
                    <div className="pdf_container_one" style={{
                        marginLeft: "10px",
                        padding: "20px 20px",
                        width: "3in"

                    }}>
                        <div className="pdf_photo"></div>
                        <div className="pdf_name" style={{ fontSize: "35px", fontWeight: "bolder" }}>{props.full_name}</div>
                        <div className="pdf_email" style={{ marginTop: "30px" }}>
                            <span className="pdf_element"></span>{props.email}

                        </div>
                        <div className="pdf-phone" style={{ marginTop: "25px" }}>
                            <span className="pdf_element">
                                📞</span>{props.phone}
                        </div>
                        <div className="pdf_address" style={{ marginTop: "25px" }}>
                            <span className="pdf_element">

                                🏠 </span>{props.address}

                        </div>
                        <div className="pdf_skills" style={{ marginTop: "25px" }}>
                            <span className="pdf_element">🖊️Skills  </span>
                            {props.skills.map((val) => {
                                return <li>{val}</li>
                            })}
                        </div>
                        <div className="pdf_interest" style={{ marginTop: "25px" }}>
                            <span className="pdf_element" > 🖤Interests</span>
                            <div>
                                {props.interests.map((val) => {
                                    return <li>{val}</li>

                                })}
                            </div>
                        </div>
                        <div className="pdf_lang" style={{ marginTop: "25px" }}>
                            <span className="pdf_element"> #️⃣Languages</span>
                            <div>
                                {props.languages.map((val) => {
                                    return <li>{val}</li>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="pdf_container_two"
                        style={{ marginLeft: "70px", padding: "20px 20px" }}>

                        <div className="pdf_objective" style={{ marginTop: "105px", padding: "10px 10px" }}>
                            <span className="pdf_element">

                                🎯  Objective
                            </span><br />
                            {props.objective}</div>
                        <div className="pdf_experience" style={{ marginTop: "25px" }}>
                            <span className="pdf_element">

                                🎒 Experience
                            </span>
                            <br />

                            {props.experience.map((val) => {
                                return <li>{val}</li>
                            })}

                        </div>
                        <div className="pdf_education" style={{ marginTop: "25px" }}>
                            <span className="pdf_element">

                                📚 Education
                             </span>
                            {props.education.map((val) => {
                                return <li>{val}</li>
                            })}
                        </div>
                        <div className="pdf_project" style={{ marginTop: "25px" }}>
                            <span className="pdf_element">
                                💻 Projects
                            </span>
                            {props.projects.map((val) => {
                                return <li>{val}</li>
                            })}






                        </div>
                    </div>
                </div>
                <ReactTOPdf targetRef={ref} >
                    {({ toPdf }) => <button onClick={toPdf} className="get_started">Download</button>}
                </ReactTOPdf>
            </div>


        </>
    )

}
export default PDF;