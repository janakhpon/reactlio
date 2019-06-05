import React from 'react';
import Displaytitle from './Displaytitle';
import Displaymore from './Displaymore';

class App extends React.Component{
    

    render() {
        return (
            <div>
                <h1 className="bio-fade-in">Hi! watashi wa novae desu</h1>
                <Displaytitle />
                <hr />
                <Displaymore/>
                
                
            </div>
        )
    }

}

export default App;
