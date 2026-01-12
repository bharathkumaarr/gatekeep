import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login"></Route>
      <Route path="/register"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/apis"></Route>
      <Route path="/apis/:id"></Route>
      <Route path="/analytics"></Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
