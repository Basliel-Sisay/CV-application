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
    function edited(e){
        setedit(true);
        setForm(ed);
    }
    if(edit === true){
        return (
            <>
            <input name="SchoolName" value={form.SchoolName} onChange={change}/>
            <input name="titleOfStudy" value={form.titleOfStudy} onChange={change}/>
            <input name="dateOfStudy" value={form.dateOfStudy} onChange={change}/>
            <button onClick={submit}>Submit</button>
            </>
        )
    }
    return(
        <>
        <h2>Educational Information</h2>
        <h3>Name: {ed.SchoolNameame}</h3>
        <h3>Email: {ed.titleOfStudy}</h3>
        <h3>Phone: {ed.dateOfStudy}</h3>
        <button onClick={edited}>Edit form</button>
        </>
    )
}