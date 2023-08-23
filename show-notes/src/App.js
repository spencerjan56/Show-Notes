
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeTile from './components/HomeTile';
import './App.css';



function App() {
  return (
    <div className="home-tiles-container">
      <Router>
        <Routes>
          <Route path="/" element={tilesObject.map((tile, index) => (
            <HomeTile key={index} imageUrl={tile.imageUrl} routeTo={tile.routeTo} />
          ))} />
        </Routes>
      </Router>
    </div>
  );
}







const tilesObject = [
  {imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1466437268076310022/3453C2187E128B756E9611A1F7890CC88507CE1E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  routeTo: '/route1',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/08/Episode-Card-138-David-Linden.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-135-Tony-Hawk.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route1',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-134-Maya-Shankar-1.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-132-Rob-Malenka.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-131.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route1',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1466437268076310022/3453C2187E128B756E9611A1F7890CC88507CE1E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  routeTo: '/route1',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1466437268076310022/3453C2187E128B756E9611A1F7890CC88507CE1E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  routeTo: '/route1',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1466437268076310022/3453C2187E128B756E9611A1F7890CC88507CE1E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  routeTo: '/route1',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',},
  {imageUrl: 'https://i0.wp.com/hubermanlab.com/wp-content/uploads/2023/07/Episode-Card-133.jpg?resize=1080%2C608&ssl=1',
  routeTo: '/route2',}
]



export default App;