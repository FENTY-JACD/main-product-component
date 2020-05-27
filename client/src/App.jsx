import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Product from './components/Product.jsx';
import ProductPrice from './components/ProductPrice.jsx';
import Reviews from './components/Reviews.jsx';
import Bag from './components/add/Bag.jsx';
import ImageView from './components/imageViewer/ImageView.jsx';
import Details from './components/Detail/Details.jsx';
import DropDownList from './components/DropDown/DropDownList.jsx';
import NavLink from './components/NavLink/NavLink.jsx';
import WishList from './components/WishList/WishList.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: {},
      whichPic: 1,
    };
    this.getItems = this.getItems.bind(this);
    // this.random = this.random.bind(this);
    this.changePhoto = this.photoChange.bind(this);
    this.photoChange = this.photoChange.bind(this);
  }

  componentDidMount() {
    this.getItems();

  }

  getItems() {
    axios.get(`http://localhost:8080/api`, {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
     .then((data) => {
      this.setState({
        item: data.data.rows[0],
      })
    })
    .catch(err => console.error(err));
  }

  // random() {
  //   this.setState({
  //     item: (this.state.items[Math.floor(Math.random() * Math.floor(this.state.items.length))])
  //   });
  // }

  photoChange(id) {
    this.setState({
      whichPic: id
    });
  }

  render() {
    let newStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      // alignItems: 'stretch',
      flexGrow: 4,
      margin: '20px',
      fontFamily: 'Questrial'
    };

    let containerStyle = {
      padding: '20px 30px 30px',
      display: 'flex',
    };

    let sideContainer = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 70,
      padding: 120,
    };


      return (

        <div style={newStyle}>
          <div style={containerStyle}>
            <div>
              <NavLink item={this.state.item} />
              <ImageView whichPic={this.state.whichPic}/>
            </div>

            <div style={sideContainer}>
              <Product item={this.state.item} />
              <br />
              <ProductPrice item={this.state.item} />
              <br />
              <Reviews item={this.state.item}/>
              <br />
              <DropDownList item={this.state.item} photoChange={this.photoChange} />
              <br />

              <br />
              <Bag />
              <br />
              <WishList />
              <br />
              <Details item={this.state.item} />
            </div>
          </div>
        </div>
      );

  }
}

export default App;
