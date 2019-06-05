import React from 'react';

class Displaymore extends React.Component{

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
          <div className="bio-fade-out">
            {this.state.displayBio ? (
              <div>
                <p> watashiwa novae desu</p>
                <p>
                  My favorite language is JavaScript, and I think
                  React.js is awesome.
                </p>
                <p>arigatoogoseimasu</p>
                <button onClick={this.toggleDisplayBio}>
                  Show less
                </button>
              </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>
                  Read more
                </button>
              </div>
            )}
          </div>
        );
    }

}

export default Displaymore;
