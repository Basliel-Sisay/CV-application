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
   function edit(e){
    setForm(general);
    setIsEditing(true);
   }
   if(isEditing === true){
    return(
        <div>
        <input name="name" value={form.name} onChange={change} />
        <input name="email" value={form.email} onChange={change} />
        <input name="phone" value={form.phone} onChange={change} />
        <button onClick={submit}>Submit</button>
      </div>
    )
   }
   return(
    <>
    <h2>General Information</h2>
    <h3>Name: {general.name}</h3>
    <h3>Email: {general.email}</h3>
    <h3>Phone: {general.phone}</h3>
    <button onClick={edit}>Edit form</button>
    </>

   )

}  
