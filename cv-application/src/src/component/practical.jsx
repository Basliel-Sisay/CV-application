import { useState } from "react";
function Practical({pr, setpr}){
    const [form , setForm] = useState(pr);
    const [ edit, setedit] = useState(true);
    function change(e){
        const {name , value} = e.target;
        setForm(previous=>({...previous, [name]: value}));
    }
    function edited(){
        setedit(true);
        setForm(pr);
    }
    function submit(e){
        e.preventDefault();
        setpr(form);
        setedit(false);
    }
    if(edit === true){
        return (
            <div className="cv-section">
                <h2>Practical Experience</h2>
                <div className="form-grid">
                    <div className="form-group form-full-width">
                        <label>Company name:</label>
                        <input name="companyName" value={form.companyName} onChange={change} />
                    </div>
                    <div className="form-group">
                        <label>Position title:</label>
                        <input name="positionTitle" value={form.positionTitle} onChange={change} />
                    </div>
                    <div className="form-group">
                        <label>Date from:</label>
                        <input name="dateFrom" value={form.dateFrom} onChange={change}/>
                    </div>
                    <div className="form-group">
                        <label>Date until:</label>
                        <input name="dateUntil" value={form.dateUntil} onChange={change}/>
                    </div>
                    <div className="form-group form-full-width">
                        <label>Responsibilities:</label>
                        <input name="responsibilities" value={form.responsibilities} onChange={change} />
                    </div>
                </div>
                <button className="submitButton" onClick={submit}>Submit</button>
            </div>
        )
    }
    return(
        <div className="cv-section">
            <h2>Practical Experience</h2>
            <div className="display-info">
                <h3>Company name: {pr.companyName}</h3>
                <h3>Position Title: {pr.positionTitle}</h3>
                <h3>Date from: {pr.dateFrom}</h3>
                <h3>Date until: {pr.dateUntil}</h3>
                <h3>Responsibilities: {pr.responsibilities}</h3>
            </div>
            <button className="editButton" onClick={edited}>Edit Information</button>
        </div>
    )
}
export default Practical;