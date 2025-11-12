import { useState } from "react";
function General({general, setgeneral}) {
    const [form, setForm] = useState(general);
    const [isEditing, setIsEditing] = useState(true);//true edit mode and false display mode
   function change(e){//takes a parameter event changer that will be active on onChange
    const {name, value} = e.target;
    setForm(previous => ({...previous, [name]:value}))
   }
   function submit(e){
    e.preventDefault();
    setgeneral(form);
    setIsEditing(false);
   }
   function edit(){
    setForm(general);
    setIsEditing(true);
   }
    if(isEditing === true){
        return(
            <div className="cv-section">
                <h2>General Information</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Name:</label>
                        <input name="name" value={form.name} onChange={change} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input name="email" value={form.email} onChange={change} />
                    </div>
                    <div className="form-group form-full-width">
                        <label>Phone:</label>
                        <input name="phone" value={form.phone} onChange={change} />
                    </div>
                </div>
                <button className="submitButton" onClick={submit}>Submit</button>
            </div>
        )
    }
    return(
        <div className="cv-section">
            <h2>General Information</h2>
            <div className="display-info">
                <h3>Name: {general.name}</h3>
                <h3>Email: {general.email}</h3>
                <h3>Phone: {general.phone}</h3>
            </div>
            <button className="editButton" onClick={edit}>Edit Information</button>
        </div>
    )

}  
export default General;