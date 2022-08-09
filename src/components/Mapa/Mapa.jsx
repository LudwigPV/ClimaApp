import { useContext } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import { DraggableMarker } from '../DraggeableMarker/DraggeableMarker'
import { WeatherContext } from '../../context/WeatherContext'
import { DictionaryContext } from '../../context/DictionaryContext'
import 'leaflet/dist/leaflet.css'
import style from './Mapa.module.css'

export const Mapa = () => {
    const { otherWords } = useContext(DictionaryContext);
    const { location, lenguage } = useContext(WeatherContext) 

    return (
        <>
            <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false} className={style.container_map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker />
            </MapContainer>
            <p className={style.footer} >{otherWords.footer_message[lenguage]} <a className={style.linkAPI} href="https://api.openweathermap.org">https://api.openweathermap.org</a> </p>
        </>
    )
}