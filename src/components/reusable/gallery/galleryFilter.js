import React, { Component } from 'react';

class GalleryFilter extends Component{
  galleryFilter = (data) => {
    return(
      data.filter.map((filterList) => {
        return(
          <div className="filterList light align-center">
            {filterList}
          </div>
        );
      })
    );
  }
  render(){
    const { data } = this.props;
    return(
      <div>
        <div>
          {this.galleryFilter(data)}
        </div>
      </div>
    );
  }
}

export default GalleryFilter;
