import {useState,useContext} from 'react'
import'../../App.css';
import AdminNavbar from '../../components/AdminNavbar';
import notification from '../../resources/notification.png'
import Avatar from 'react-avatar'
import { AuthContext } from '../../Hooks/InfoContext';

const AdminDrive = () => {
  const {register,userInfo}= useContext(AuthContext);
  const Username = userInfo.username;
  const role = "driver";
  const [email,setEmail]=useState("");
  const [username,setUsername]= useState('');
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState('');
  const comAssociate = username;

  const AddNewDriver = (e) =>{
    e.preventDefault();
    register(username, email, password, phone,role,comAssociate);
  }

  return (
    <div className='App'>
      <AdminNavbar/>
      <div className='right-side'>
        <div className='comNamediv'>
          <h1 className='comtxt'>{Username}</h1>
          <div className='profileContainer'>
            <img src={notification} alt='noti'/>
            <Avatar size={40} name={Username} round/>
          </div>
        </div>
        <div className='bigdiv'>
          <div className='leftbigdiv'>

          </div>
          <form onSubmit={AddNewDriver}>
            <label className='labelS'>Add a driver to your company</label>
            <label className='labelH'>Name*</label>
            <input onChange={(e)=>setUsername(e.target.value)} className='driverInput' type="text" />
            <label className='labelH'>Email*</label>
            <input onChange={(e)=>setEmail(e.target.value)} className='driverInput' type="text" />
            <label className='labelH'>Phone Number*</label>
            <input onChange={(e)=>setPhone(e.target.value)} className='driverInput' type="text" />
            <label className='labelH'>Assigned Password*</label>
            <input onChange={(e)=>setPassword(e.target.value)} className='driverInput' type="text" />
            <button className='driverBtn'>Add Driver</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminDrive;

