import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';
import DataAlarm from './utils/data_alarm_marker.json';


const SimpleMap = (props) => {
    const [center] = useState({lat: -6.2088, lng: 106.8456 });
    const [zoom] = useState(9);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBpLE9VWinX09eeTl6dLXtryw6IMAK1SOk' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {DataAlarm.map((el, index)=>
          <Marker
            key={index}
            lat={el.LATITUDE}
            lng={el.LONGITUDE}
            siteClass={el.SITECLASS}
            status={el.prime_status}
          />)}
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;