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
            <div>
            <input name="companyName" value={form.companyName} onChange={change} />
            <input name="positionTitle" value={form.positionTitle} onChange={change} />
            <input name="responsibilities" value={form.responsibilities} onChange={change} />
            <input name="dateFrom" value={form.dateFrom} onChange={change}/>
            <input name="dateUntil" value={form.dateUntil} onChange={change}/>
            <button onClick={submit}>Submit</button>
          </div>
        )
    }
    return(

        <>
    <h2>Practical Information</h2>
    <h3> Company name:{pr.companyName}</h3>
    <h3>Position Title:{pr.positionTitle}</h3>
    <h3>Responsibilities:{pr.responsibilities}</h3>
    <h3>Date from:{pr.dateFrom}</h3>
    <h3>Date until:{pr.dateUntil}</h3>
    <button onClick={edited}>Edit form</button>
        </>
    )
}