// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

import { Toaster, toast } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  // const [count, setCount] = useState(0)

  return;
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" elemeny={<HomePage />} />
        <Route path="*" elemeny={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
