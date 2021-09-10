import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

class MapBox extends Component{


    render() {
        return(
            <div >
                <Map google={this.props.google} zoom={14} 
                    initialCenter={{
                        lat: 13.6967923 ,
                        lng: -89.2224428
                    }
                }
                >
                    {
                        this.props.element ? (
                            <Marker onClick={this.onMarkerClick}
                            position={{lat: this.props.element.latitude, lng: this.props.element.longitude}}/>
                     
                        ) : null
                    }
                </Map> 
            </div>
        )
    }  
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCW5RiPl7JDZrA0paobjb_F2eRluDgDYEs")
  })(MapBox)