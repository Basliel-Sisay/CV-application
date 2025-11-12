import { useState } from 'react'
import General from './src/component/general.jsx';
import Education from './src/component/eduaction.jsx';
import Practical from './src/component/practical.jsx';
import './src/style/style.css';

function App() {
  const [general, setgeneral] = useState({name:'', email:'', phone:''});
  const [ed, seted] = useState({SchoolName:'', titleOfStudy:'',dateOfStudy:''});
  const [pr, setpr] = useState({companyName:'',positionTitle:'',responsibilities:'',dateFrom:'',dateUntil:''});

  return (
    <div className="cv-container">
      <General general={general} setgeneral={setgeneral}/>
      <Education ed={ed} seted={seted}/>
      <Practical pr={pr} setpr={setpr}/>
    </div>
  )
}

export default App;
