import React, { Component } from 'react';
import Gallery from './gallery';
import GalleryFilter from './galleryFilter';
import { connect } from 'react-redux';
import { fetchGallerys } from '../../../redux/actions';
import { GET_TOKEN, GET_URL } from '../../../config';

class GallerySection extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.fetchGallerys(`${GET_URL}/gallery?token=${GET_TOKEN}`);
    console.log(this.props.data);
  }

  handleFilter = (filter) => {
    console.log(filter);
    this.setState({
      filter: filter
    })
  }

  render(){
    const { data } = this.props;

    return(
      <div className="container-fullWidth gallery-container">
        <div className="row">
          <div className="column colmd-4"></div>
          <div className="column colmd-8">
            <h1 className="light">Gallery</h1>
          </div>
        </div>
        <div className="row">
          <div className="column colmd-4"><GalleryFilter data={data} filter={this.handleFilter} name={this.props.name}/></div>
          <div className="column colmd-7"><Gallery name={this.props.name} data={data} filter={this.state.filter}/></div>
        </div>
      </div>
    );
  }
 }


function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetchGallerys })(GallerySection);
