import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet',
      imgSrc: 'https://example.com/profile.jpg',
      profession: 'Software Developer',
    },
    show: false,
    timeSinceMounted: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMounted: this.state.timeSinceMounted + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { person, show, timeSinceMounted } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;

