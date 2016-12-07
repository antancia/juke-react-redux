import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  return (
    <div>
      {console.log(props)}
      <h3>Stations</h3>
      <div className="list-group">
      {
        // DUMMY_STATIONS_DATA.map(station => {
        //   return (
        //     <div className="list-group-item" key={station.name}>
        //       <Link to={'fill/me/in/later'}>{station.name}</Link>
        //     </div>
        //   );
        // })

        Object.keys(props.stations).map(function(stationName) {
          return (
            <div className="list-group-item" key={stationName}>
              <Link to={`/stations/${stationName}`}>{stationName}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );

}
