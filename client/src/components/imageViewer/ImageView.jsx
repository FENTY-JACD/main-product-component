import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photo: {},
      photo2: {},
      photo3: {},
      hover: false,
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios.get(`http://localhost:8080/api/photos`, {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
    .then((data) => {
      this.setState({
        // photos: data.data
        photo: data.data.rows[0],
        photo2: data.data.rows[0],
        photo3: data.data.rows[0]
      })
    })
    .catch(err => console.error(err))
  }


  // random() {
  //   this.setState({
  //     photo: (this.state.photos[Math.floor(Math.random() * Math.floor(this.state.photos.length))]),
  //     photo2: (this.state.photos[Math.floor(Math.random() * Math.floor(this.state.photos.length))]),
  //     photo3: (this.state.photos[Math.floor(Math.random() * Math.floor(this.state.photos.length))]),
  //   });
  // }

  render() {

    let foregroundStyle = {
      cursor: 'crosshair',
      position: 'absolute',
      height: '900px',
      width: '530px',
      color: '#000',
      left: '40vw',
      top: '13vh'
    };

    return (
      <div >

        <img src={this.state.photo.background}></img>

        <div style = {foregroundStyle}>
          <Carousel photo1={this.state.photo} photo2={this.state.photo2} photo3={this.state.photo3} whichPic={this.props.whichPic} />
        </div>
      </div>
    );
  }
}

export default ImageView;
