import React, { Component } from 'react';

class GalleryFilter extends Component{
  galleryFilter = (data, name) => {
    return(
      data.galleries.map((gallery) => {
        if(gallery.title == name) {
          return(
            gallery.categorys.map((category, i) => {
              return  <h3 key={i + 'filter'} className="light align-left" onClick={() => this.props.filter(category)}>{category}</h3>
            })
          );
        }
      })
    );
  }

  render(){
    const { data, filter, name } = this.props;
    return(
      <div>
        {this.galleryFilter(data, name)}
      </div>
    );
  }
}

export default GalleryFilter;
