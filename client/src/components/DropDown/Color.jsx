import React from 'react';
import ReactTooltip from "react-tooltip";

class Color extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      newLoad: false,
      name1: '',
      name2: '',
      name3: '',
      update: '',
      updateColor: '',
      placeholder: '',
      placeColor: '',
      id: '',
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.getPlace = this.getPlace.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.setName = this.setName.bind(this);
    this.idHandler = this.idHandler.bind(this);
  }

  componentDidMount() {
    this.getPlace();
  }

  setName() {
    setTimeout(() => {
      this.setState({
        placeholder: this.state.update,
        placeColor: this.state.updateColor
      });
    }, 700);
  }

  getPlace() {
    setTimeout(() => {
      this.setState({
        name1: this.props.item[0].name1,
        name2: this.props.item[0].name2,
        name3: this.props.item[0].name3,
        placeholder: this.props.item[0].name1,
        placeColor: this.props.item[0].color1,
        id: this.props.item[0].id
      });
    }, 675);
  }


  clickHandler(name, color) {
    this.setState({
      update: name,
      updateColor: color,
    });
  }


  idHandler(id) {
    this.setState({
      id: id
    });
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    let newSize = {
      width: '5em',
      height: '5em',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    };

    let align = {
      display: 'flex',
      width: '250px',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
    };

    let colorStyle = {
      display: 'inline-flex',
      justifyContent: 'space-evenly',
    };

    let colorSize = {
      width: '5em',
      height: '5em',
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '10px',
    };

    let bolded = {
      fontWeight: 900,
      fontSize: '18px',
    };

    return (

      <div  className="dropdown" style = {{border: "1px", width:"300px", margin: "10px"}} >
      <div className="button" onClick={this.showDropdownMenu}> {this.state.name1 === '' ? <div></div> : <div style = {align}> <p>Shade:</p> &nbsp; &nbsp; &nbsp; <img style = {newSize} src = {this.state.placeColor}></img>  &nbsp; <div style = {bolded} onClick = {() => {this.clickHandler(this.state.name1, this.props.item[0].color1); this.setName();}}>  &nbsp; {this.state.placeholder}  &nbsp; </div></div>} </div>

        { this.state.displayMenu ? (
        <ul className = "dropDownList">
        <li onClick = {() => {this.clickHandler(this.state.name2, this.props.item[0].color2); this.setName();}} style = {align}> <img style = {newSize} src = {this.props.item[0].color2}></img>   <a style = {bolded} >{this.state.name1 === '' ? <div></div> : <div>{this.state.name2}</div>}</a></li>
        <li onClick = {() => {this.clickHandler(this.state.name3, this.props.item[0].color3); this.setName();}} style = {align}> <img style = {newSize} src = {this.props.item[0].color3}></img>   <a style = {bolded} >{this.state.name1 === '' ? <div></div> : <div>{this.state.name3}</div>}</a></li>

        </ul>
      ):
      (
        null
      )
      }

          <br />
          <br />

        <div style = {colorStyle}>
        <ReactTooltip />
          <div data-tip={this.state.name1}> {this.state.name1 === '' ? <div></div> : <div style = {colorStyle}> <img onMouseEnter = {() => {this.idHandler(1); this.props.photoChange(this.state.id);}} onMouseLeave = {() => {this.idHandler(1); this.props.photoChange(this.state.id);}} onClick = {() => {this.clickHandler(this.state.name1, this.props.item[0].color1); this.setName(); this.props.photoChange(this.state.id);}}  style = {colorSize} src = {this.props.item[0].color1}></img> </div>} </div>
          <div data-tip={this.state.name2}> {this.state.name1 === '' ? <div></div> : <div style = {colorStyle}> <img onMouseEnter = {() => {this.idHandler(2); this.props.photoChange(this.state.id);}} onMouseLeave = {() => {this.idHandler(2); this.props.photoChange(this.state.id);}} onClick = {() => {this.clickHandler(this.state.name2, this.props.item[0].color2); this.setName(); this.props.photoChange(this.state.id);}}  style = {colorSize} src = {this.props.item[0].color2}></img> </div>} </div>
          <div data-tip={this.state.name3}> {this.state.name1 === '' ? <div></div> : <div style = {colorStyle}> <img onMouseEnter = {() => {this.idHandler(3); this.props.photoChange(this.state.id);}} onMouseLeave = {() => {this.idHandler(3); this.props.photoChange(this.state.id);}} onClick = {() => {this.clickHandler(this.state.name3, this.props.item[0].color3); this.setName(); this.props.photoChange(this.state.id);}}  style = {colorSize} src = {this.props.item[0].color3}></img> </div>} </div>
        </div>

         </div>

    );
  }
}

export default Color;
