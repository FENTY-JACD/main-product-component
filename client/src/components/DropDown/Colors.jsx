import React from 'react';
import Color from './Color.jsx'

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      single: {},
      filtered: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.id !== this.state.id) {
      this.setState({
        id: this.props.item.id
      });
    }
  }

  render() {
    var filtered;
    if(this.props.colors.length) {
      filtered = this.props.colors.filter((item) => item.id === this.state.id);
    }

    if(filtered) {
      return (
        <div>
          <div>
            <Color item={filtered} photoChange={this.props.photoChange} />
          </div>
        </div>
      );
    } else {
      return <div>Loading..</div>
    }

  }
}

export default Colors;
