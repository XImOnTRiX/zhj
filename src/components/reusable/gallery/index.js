import React, { Component } from 'react';
import Gallery from './gallery';
import GalleryFilter from './galleryFilter';

class GallerySection extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        catergory: ["gerade", "ungerade"],
        path: ["1", "2", "3", "4", "5", "6", "7"]
      }
    }
  }

  render(){
    return(
      <div className="container-fullWidth gallery-container">
        <h1 className="light">Gallery</h1>
        <div className="row">
          <div className="column colmd-4"><GalleryFilter data={this.state.data}/></div>
          <div className="column colmd-8"><Gallery data={this.state.data}/></div>
        </div>
      </div>
    );
  }
 }

 export default GallerySection;
