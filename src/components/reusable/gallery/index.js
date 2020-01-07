import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Gallery from './gallery';
import GalleryFilter from './galleryFilter';
import { connect } from 'react-redux';
import { fetch} from '../../../redux/actions';
import { GET_TOKEN, GET_URL } from '../../../config';

class GallerySection extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.fetch('fetch_gallery', `${GET_URL}/gallery?token=${GET_TOKEN}`);
  }

  handleFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render(){
    const { data } = this.props;

    return(
      <div className="container-fullWidth pb pt">
        <div className="row">
          <div className="column colmd-4"></div>
          <div className="column colmd-8">
            <Fade bottom>
              <h1 className="light">Galerie</h1>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div className="row">
            <div className="colmd-1"></div>
            <div className="column colmd-3"><GalleryFilter data={data} filter={this.handleFilter} name={this.props.name} filterName={this.state.filter}/></div>
            <div className="column colmd-7"><Gallery name={this.props.name} data={data} filter={this.state.filter}/></div>
          </div>
        </Fade>
      </div>
    );
  }
 }


function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetch })(GallerySection);
