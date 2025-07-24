import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import ScrollToHash from './ScrollToHash';


const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Course"));
const Enrolled = lazy(() => import("./pages/Enrolled"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Python = lazy(() => import("./pages/overview/Pythonoverview"));
const DataSic = lazy(() => import("./pages/overview/DataScienceoverview"));
const DataSec = lazy(() => import("./pages/overview/DataSecurityoverview"));
const DSA = lazy(() => import("./pages/overview/DSA_overview"));
const Web = lazy(() => import("./pages/overview/webOverview"));
const AppOverview = lazy(() => import("./pages/overview/AppOverview"));
const AIML = lazy(() => import("./pages/overview/AIMLoverview"));
const Java = lazy(() => import("./pages/overview/Javaoverview"));
const Cpp = lazy(() => import("./pages/overview/Cppoverview"));
const Subs = lazy(() => import("./pages/Subscription"));
const Profile = lazy(() => import("./pages/LearningDashboard"));

const App = () => {
  return (
    <div>
      <Router>
      <Suspense fallback={<div className="loader">Loading...</div>}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/enrolled" element={<Enrolled/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/subscription" element={<Subs/>}/>
        <Route path="/profile" element={<Profile/>}/>

        <Route path="/overview/python" element={<Python/>}/>
        <Route path="/overview/App" element={<AppOverview/>}/>
        <Route path="/overview/Data-science" element={<DataSic/>}/>
        <Route path="/overview/Data-security" element={<DataSec/>}/>
        <Route path="/overview/dsa" element={<DSA/>}/>
        <Route path="/overview/web" element={<Web/>}/>
        <Route path="/overview/AIML" element={<AIML/>}/>
        <Route path="/overview/java" element={<Java/>}/>
        <Route path="/overview/cpp" element={<Cpp/>}/>
      </Routes>
      </Suspense>
      
      </Router>
    </div>
  );
};

export default App;