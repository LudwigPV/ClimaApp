import {useState, useMemo, useRef, useCallback, useContext} from 'react'
import {WeatherContext} from '../../context/WeatherContext'
import {DictionaryContext} from '../../context/DictionaryContext'
import {Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

L.Marker.prototype.options.icon = DefaultIcon;

export function DraggableMarker() {
    const {location, setLocation, lenguage} = useContext(WeatherContext);
    const {otherWords} = useContext(DictionaryContext);
    const [draggable, setDraggable] = useState(false)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setLocation(marker.getLatLng())
          }
        },
      }),
      [],
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
        >
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
  