// import React from 'react';


// import './App.css';
// import HomeTile from './components/HomeTile';

// function App() {
//   return (
//     <div>
//       <button>ellooooooo</button>
//       <HomeTile imageUrl="https://steamuserimages-a.akamaihd.net/ugc/1466437268076310022/3453C2187E128B756E9611A1F7890CC88507CE1E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" routeTo="" />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeTile from './components/HomeTile';

function App() {
  return (
    <div>
      <button>Helloooo</button>
      <Router>
        <Routes>
          <Route
           path="/" 
           element={<HomeTile imageUrl="https://steamuserimages-a.akamaihd.net/ugc/1466437268076310022/3453C2187E128B756E9611A1F7890CC88507CE1E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />}
           routeTo=""
           />
        </Routes>
      </Router>
    </div>
  );
}

export default App;