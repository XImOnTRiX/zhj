import React, { Component } from 'react';

class GalleryFilter extends Component{
  galleryFilter = (data) => {
    return(
      data.category.map((filterList) => {
        return(
          <h2 className="light align-center" onClick={() => this.props.filter(filterList)}>{filterList}</h2>
        );
      })
    );
  }

  render(){
    const { data, filter } = this.props;
    return(
      <div>
        {this.galleryFilter(data)}
      </div>
    );
  }
}

export default GalleryFilter;
