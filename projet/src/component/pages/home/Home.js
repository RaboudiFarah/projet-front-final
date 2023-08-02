
import './home.css';
import Header from '../../header/Header';
 import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import Teacher from '../../teacher/Teacher';
export default function Home() {
  return (
    <>
   
    <Header/>
    <div className ='home'>
   <Sidebar/>
   
   <Posts/>

    </div>
    <Teacher/>
<h1 className='final'> RIEN N’EST PLUS IMPORTANT QUE LE BIEN-ÊTRE DE VOTRE ENFANT.</h1>
    </> 
  )
}
