import React, { Component } from 'react';
import Gallery from './gallery';
import GalleryFilter from './galleryFilter';

class GallerySection extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        path: ["1", "2", "3", "4", "5", "6"],
        filter: ["gerade", "ungerade"]
      }
    }
  }

  render(){
    return(
      <div className="container-fullWidth gallery-container">
        <h1 className="light">Gallery</h1>
        <div className="row">
          <div className="column colmd-4"><GalleryFilter data={this.state.data}/></div>
          <div className="column col"><Gallery data={this.state.data}/></div>
        </div>
      </div>
    );
  }
 }

 export default GallerySection;
