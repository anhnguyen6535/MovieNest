import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
    let navigate = useNavigate()

    const handleSave = () =>{
        navigate('/genres')
    }
    return<>
        <h3>Create Genre</h3>
        <Button onClick={handleSave}>Save Changes</Button>
    </>
}