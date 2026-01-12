import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"
import Dashboard from "./pages/Dashboard/Dashboard"
import APIs from "./pages/APIs/APIs"
import Analytics from "./pages/Analytics/Analytics"



function App() {


  return (
    <BrowserRouter>
    <Routes>
      {/* public */}
      <Route path="/login" />
      <Route path="/register" />
      
      {/* protected */}
      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/apis" element={<APIs />} />
        <Route path="/apis/:id" />
        <Route path="/analytics" element={<Analytics />}/>

      </Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
