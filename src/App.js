import React from 'react';
import PourContainer from './components/PourContainer'

// todo: move this to dedicate utility!
// function test() { 
//   const options = {
//     acceptAllDevices: true,
    
//   }
//   navigator.bluetooth.requestDevice(options).then(device => {
//     device.gatt.connect()
//     .then(c => {
//       const a = 's';
//     })
      
//     .catch(c => c.console.log(c))
//   })
// }




function App() {
  return (

      <div className='outermost centerContent'>
        <PourContainer></PourContainer>
      </div>
      


  );
}

export default App;
