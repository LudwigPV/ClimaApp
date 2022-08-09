import {useState, useMemo, useRef, useCallback, useContext, Children} from 'react'
import {WeatherContext} from '../../context/WeatherContext'
import {DictionaryContext} from '../../context/DictionaryContext'
import {Marker, Popup, useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

L.Marker.prototype.options.icon = DefaultIcon;

export function DraggableMarker({children}) {
    const {location, setLocation, lenguage} = useContext(WeatherContext);
    const {otherWords} = useContext(DictionaryContext);
    const [draggable, setDraggable] = useState(false);
    const markerRef = useRef(null);
    const map = useMapEvents({click() {map.flyTo(location)}})
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) setLocation(marker.getLatLng());
          // map.flyTo(marker.getLatLng(), 13);
        },
      }), [setLocation]
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={location}
        ref={markerRef}
        value={{map}}
        >
        {children}
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? otherWords.marker_map_draggeable[lenguage]
              : otherWords.marker_map_draggeable_disabled[lenguage]}
          </span>
        </Popup>
      </Marker>
    )
  }
  