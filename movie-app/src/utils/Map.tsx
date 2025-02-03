import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'
import coordinateDTO from "./coordinate.model";
import { useState } from "react";

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
})

L.Marker.prototype.options.icon = defaultIcon;

export default function Map({
    height = '500px',
}: mapProps) {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);

    return (
        <MapContainer
            center={[51.12143347819789, -114.06582773265848]} zoom={14} style={{height: height}}
        >
            <TileLayer attribution="React Movies" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <MapClick setCoordinates={coordinates =>{
                setCoordinates([coordinates]);
            }} />
            {coordinates.map((coordinate, index) => <Marker key={index} position={[coordinate.lat, coordinate.lgn]} />)}
        </MapContainer>
    )
}

interface mapProps{
    height?: string;
}

function MapClick(props: mapClickProps){
    useMapEvent('click', eventArgs =>{
        props.setCoordinates({lat: eventArgs.latlng.lat, lgn: eventArgs.latlng.lng})
    })
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates: coordinateDTO): void
}
