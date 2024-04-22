import React from 'react'
import { BrowserRouter as Router, Routes, Route,  Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import toast, { Toaster } from 'react-hot-toast';
import Home from './Home/Home';
import Feedback from './Feedback/Feedback';
import Courses from './courses/Courses';
// import { useAuth } from './Authcontext/AuthContext';



const App = () => {
  // const  [authUser, setAuthUser] = useAuth()
  // console.log(useAuth);
  return (
    <div >
      <Router>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/course"element={<Courses /> }  />
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/contact' element={<Feedback/>}/>
             
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App