
import React from 'react';
import './Marker.scss';
import IMAGES from "../../configs/images"

const Marker = (props) => {
    const { status, siteClass } = props;
    return (
      <img src={IMAGES["marker-"+(status === "NO"?"circle":"star")+"-"+siteClass]} alt="marker" width={30} height={30} />
    );
  };

  export default Marker;