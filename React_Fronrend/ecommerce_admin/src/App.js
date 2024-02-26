// import logo from './logo.svg';
// import './App.css';
import Master_layout from './admin_layout/Master_layout';
import Admin_register from './admin_components/Authorization/Admin_register';
import Admin_login from './admin_components/Authorization/Admin_login';
import Admin_authorization from './admin_pages/Admin_authorization';
import { useState } from 'react';
function App() {
  const[login,setLogin]=useState(true)
  // if(login==true)
  // {
    return (
      <div className="App">
         <div className="App">
          <Master_layout/>
          {/* <Admin_login/> */}
        </div>
      </div>
    );
  // }
  // else
  // {
  //   return (
  //     <div className="App">
  //        <div className="App">
  //         <Admin_authorization login={login} setLogin={setLogin} />
  //       </div>
  //     </div>
  //   );
  // }
  
}
        

export default App;
