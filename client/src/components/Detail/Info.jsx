import React from 'react';
import Detail from './Detail.jsx';
import Inspiration from './Inspiration.jsx';
import How from './How.jsx';
import Ingredients from './Ingredients.jsx';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderView = this.renderView.bind(this);
  }

  renderView() {
    if (this.props.clicked === 'inspo') {
      return <Inspiration item={this.props.item} />;
    } else if (this.props.clicked === 'how') {
      return <How item={this.props.item}/>
    } else if (this.props.clicked === 'ingredients') {
      return <Ingredients item={this.props.item}/>
    } else {
      return <Detail item={this.props.item}/>
    }
  }

  render() {
    let infoStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '580px',
      height: '350px',
      borderTop: '1px solid grey',
      borderBottom: '1px solid grey',
      overflow: 'scroll',
      alignContent: 'center',
      lineHeight: '18px',
      letterSpacing: '2px',
    };

    return (

      <div style={infoStyle}>
        <br />

        <div>
          {this.renderView()}
        </div>

      </div>
    );
  }
}

export default Info;
