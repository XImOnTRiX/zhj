import React, { Component } from 'react';
import _ from 'lodash';

class GalleryFilter extends Component{
  state = {
    activeFilter: this.props.filterName,
  }

  galleryFilter = (data, name) => {
    return(
      data.galleries.map((gallery) => {
          var uniqArray = _.uniq(gallery.categorys);
          if(gallery.title === name) {

          return(
            uniqArray.map((category, i) => {
              if(!category) {
                return;
              } else {
                if(this.props.filterName === category) {
                  return  <h6 key={i + 'filter'} className="light align-left bold pointer filterP" onClick={() => this.props.filter(category)}>{category}</h6>
                } else {
                  return  <h6 key={i + 'filter'} className="light align-left pointer filterP" onClick={() => this.props.filter(category)}>{category}</h6>
                }
              }
            })
          );
        } else { return undefined }
      })
    );
  }

  uniqFunction = (data, name) => {
      return data.galleries.map(data => {
        if(data.title === name) {
        return data.categorys.map(data => {
          return data;
        });
      }
    })
  }

  renderShowAll = (data) => {
    for(var i = 0; i < data.length; i++) {
      if( data[i] !== false ) {
        if(this.props.filterName === '') {
          return  <h6 key={i + 'filter'} className="light align-left bold pointer filterP" onClick={() => this.props.filter('')}>Alle</h6>
        } else {
          return  <h6 key={i + 'filter'} className="light align-left pointer filterP" onClick={() => this.props.filter('')}>alle</h6>
        }
      }
    }
  }

  render(){
    const { data, name } = this.props;
    const newArray = this.uniqFunction(data, name);
    console.log(data);
    return(
      <div>
        {this.renderShowAll(_.uniq(newArray.flat()))}
        {this.galleryFilter(data, name)}
      </div>
    );
  }
}

export default GalleryFilter;
