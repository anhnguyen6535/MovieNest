import { useFormikContext } from 'formik'
import coordinateDTO from '../utils/coordinate.model'
import Map from '../utils/Map'


export default function MapField({
    coordinates = [],
    latField,
    lngField,
}: mapFieldProps) {
    const {values} = useFormikContext<any>()
    const handleMapClick = (coordinates: coordinateDTO) =>{
        values[latField] = coordinates.lat;
        values[lngField] = coordinates.lng;
    }
    return (
        <Map 
            coordinates={coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

interface mapFieldProps{
    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;
}