import { useState } from "react";
function Education({ed, seted}){
    const [form, setForm] = useState(ed);
    const [edit, setedit] = useState(true);
    function change(e){
        const {name, value} = e.target;
        setForm(previous=>({...previous, [name]: value}))
    }
    function submit(e){
        e.preventDefault();
        setedit(false);
        seted(form);
    }
    function edited(){
        setedit(true);
        setForm(ed);
    }
    if(edit === true){
    return (
                <div className="cv-section">
                    <h2>Education Information</h2>
                    <div className="form-grid">
                        <div className="form-group form-full-width">
                            <label>School name:</label>
                            <input name="SchoolName" value={form.SchoolName} onChange={change}/>
                        </div>
                        <div className="form-group form-full-width">
                            <label>Title of study:</label>
                            <input name="titleOfStudy" value={form.titleOfStudy} onChange={change}/>
                        </div>
                        <div className="form-group">
                            <label>Date of Study:</label>
                            <input name="dateOfStudy" value={form.dateOfStudy} onChange={change}/>
                        </div>
                    </div>
                    <button className="submitButton" onClick={submit}>Submit</button>
                </div>
            )
        }
        return(
            <div className="cv-section">
                <h2>Education Information</h2>
                <div className="display-info">
                    <h3>School name: {ed.SchoolName}</h3>
                    <h3>Title of study: {ed.titleOfStudy}</h3>
                    <h3>Date of study: {ed.dateOfStudy}</h3>
                </div>
                <button className="editButton" onClick={edited}>Edit Information</button>
            </div>
        )
}
export default Education;