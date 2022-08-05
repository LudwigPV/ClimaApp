import { useContext } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import { DraggableMarker } from '../DraggeableMarker/DraggeableMarker'
import { WeatherContext } from '../../context/WeatherContext'
import 'leaflet/dist/leaflet.css'
import style  from './Mapa.module.css'

export const Mapa = () => {
    const { location, loading } = useContext(WeatherContext)

    if  (loading) {
        return <div>Cargando...</div>
    } else {
    return (
        <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false} className={style.container_map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker />
        </MapContainer>
    )
}}