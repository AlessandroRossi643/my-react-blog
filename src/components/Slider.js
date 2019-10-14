import React, { Component } from 'react';
import ReactCompareImage from 'react-compare-image';
import {current_articles} from '../articles.js';

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = { articles : current_articles};
  }

  render() {
    return (
      <div className="container-fluid slider">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 slider-container">
            <ReactCompareImage
              leftImage="../img/img1.jpg"
              rightImage="../img/img2.jpg"
              sliderLineColor="black"
              leftImageLabel="MOTIVATION"
              rightImageLabel="STRENGTH"
            />
          </div>
          <div className="offset-lg-1 col-lg-10 article-container">
            <h4 className="text-white">New Articles</h4>
            <div className="d-flex justify-content-around">
              {
                
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;
