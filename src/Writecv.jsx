import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import PDF from './PDF'

const Writecv = () => {


    const [cv, setcv] = useState(
        {
            fname: "",
            address: "",
            phone: "",
            email: "",
            objective: "",
        }
    )
    const [dis_cv, dis_setcv] = useState(
        {
            dis_fname: "",
            dis_address: "",
            dis_phone: "",
            dis_email: "",
            dis_objective: "",
        }
    )
    const [exp, setexp] = useState("");
    const [dis_exp, dis_setexp] = useState([]);
    const [edu, setedu] = useState("");
    const [dis_edu, dis_setedu] = useState([]);
    const [pro, setpro] = useState("");
    const [dis_pro, dis_setpro] = useState([]);

    const [skill, setskill] = useState("");
    const [dis_skill, dis_setskill] = useState([]);

    const [int, setint] = useState("");
    const [dis_int, dis_setint] = useState([]);

    const [lang, setlang] = useState("");
    const [dis_lang, dis_setlang] = useState([]);



    const take_input = (event) => {
        const { name, value } = event.target;
        setcv((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
    }
    const create = (event) => {
        event.preventDefault();
        dis_setcv(() => {
            return {
                dis_fname: cv.fname,
                dis_address: cv.address,
                dis_phone: cv.phone,
                dis_email: cv.email,
                dis_objective: cv.objective,


            }
        })

    }
    const take_inputexp = (event) => {
        setexp(event.target.value)
    }
    const add_exp = () => {
        dis_setexp((prevalue2) => {
            return [...prevalue2, exp]
        })
        alert("Experice is added. if you want to add more experience then write and click add button")
        setexp(" ");
    }



    const take_inputedu = (event) => {
        setedu(event.target.value)
    }
    const add_edu = () => {
        dis_setedu((prevalue2) => {
            return [...prevalue2, edu]
        })
        alert("Educaton is added. if you want to add more education then write and click add button")
        setedu(" ");
    }


    const take_inputpro = (event) => {
        setpro(event.target.value)
    }
    const add_pro = () => {
        dis_setpro((prevalue2) => {
            return [...prevalue2, pro]
        })
        alert("Projects is added. if you want to add more projects then write and click add button")
        setpro(" ");
    }


    const take_inputskill = (event) => {
        setskill(event.target.value)
    }
    const add_skill = () => {
        dis_setskill((prevalue2) => {
            return [...prevalue2, skill]
        })
        alert("Skill is added. if you want to add more skills then write and click add button")
        setskill(" ");
    }

    const take_inputint = (event) => {
        setint(event.target.value)
    }
    const add_int = () => {
        dis_setint((prevalue2) => {
            return [...prevalue2, int]
        })
        alert("Interest is added. if you want to add more interest then write and click add button")
        setint(" ");
    }


    const take_inputlang = (event) => {
        setlang(event.target.value)
    }
    const add_lang = () => {
        dis_setlang((prevalue2) => {
            return [...prevalue2, lang]
        })
        alert("Language is added. if you want to add more language then write and click add button")
        setlang(" ");
    }




    return (
        <>
            <div className="background_color">
                <div className="write_cv" >
                    <div className="write">Write</div>
                    <form onSubmit={create}>

                        <input type="text"
                            placeholder="Enter your  Full Name "
                            autoComplete="off"
                            onChange={take_input}
                            value={cv.fname}
                            name="fname" 
                                style={{textTransform:"capitalize"}}
                            />


                        <br />
                        <input type="text"
                            placeholder="Enter your  Full Address"
                            autoComplete="off"
                            onChange={take_input}
                            value={cv.address}
                            name="address"></input>
                        <br />




                        <input type="number"
                            placeholder="Enter your  Personal phone number" 
                            minLength="10"
                            autoComplete="off"
                            onChange={take_input}
                            value={cv.phone}
                            name="phone"></input>
                        <br />



                        <input type="email"
                            placeholder="example@gmail.com"
                            autoComplete="off"
                            onChange={take_input}
                            value={cv.email}
                            name="email"
                            style={{textTransform:"none"}}
                        ></input>
                        <br />



                        <input type="text"
                            placeholder="Objective"
                            autoComplete="off"
                            onChange={take_input}
                            value={cv.objective}
                            name="objective"
                            minLength="10"></input>
                        <br />



                        <input type="text"
                            placeholder="Experience"
                            autoComplete="off"
                            onChange={take_inputexp}
                            value={exp}
                            name="experience"
                        ></input>
                        <button className="add_button" onClick={add_exp}>click to add</button>
                        <br />




                        <input type="text"
                            placeholder="Education"
                            autoComplete="off"
                            onChange={take_inputedu}
                            value={edu}
                            name="education"
                        ></input>
                        <button className="add_button" onClick={add_edu}>click to add</button>
                        <br />

                        <input type="text"
                            placeholder="Projects"
                            autoComplete="off"
                            onChange={take_inputpro}
                            value={pro}
                            name="projects"
                        ></input>
                        <button className="add_button" onClick={add_pro}>click to add</button>
                        <br />


                        <input type="text"
                            placeholder="Skils"
                            autoComplete="off"
                            onChange={take_inputskill}
                            value={skill}
                            name="skills"
                        ></input>
                        <button className="add_button" onClick={add_skill}>click to add</button>
                        <br />


                        <input type="text"
                            placeholder="Interests"
                            autoComplete="off"
                            onChange={take_inputint}
                            value={int}
                            name="interests"
                        ></input>
                        <button className="add_button" onClick={add_int}>click to add</button>
                        <br />



                        <input type="text"
                            placeholder="Language"
                            autoComplete="off"
                            onChange={take_inputlang}
                            value={lang}
                            name="lang"
                        ></input>
                        <button className="add_button" onClick={add_lang}>click to add</button>
                        <br />




                        
                        <button type="submit" className="confirm" style={{marginTop:"20px"}}>Confirm</button>

                    </form>




                </div>
                <div>
                    <BrowserRouter>
                        <NavLink exact to="/pdf" >
                            <button className="get_started" style={{marginTop:"50px"}}>Create</button>

                        </NavLink>
                        <Switch>
                            <Route exact path="/pdf" render={()=>
                                <PDF full_name={dis_cv.dis_fname}
                                address={dis_cv.dis_address}
                                 phone={dis_cv.dis_phone}
                                  email={dis_cv.dis_email}
                                   objective={dis_cv.dis_objective}
                                   experience={dis_exp}
                                   skills={dis_skill}
                                   languages={dis_lang}
                                   interests={dis_int}
                                   education={dis_edu}
                                   projects={dis_pro}


                                />
                            }
                            ></Route>
                        </Switch>
                    </BrowserRouter>
                   
                    
                </div>
               
            </div>
            

        </>
    )

}
export default Writecv;
