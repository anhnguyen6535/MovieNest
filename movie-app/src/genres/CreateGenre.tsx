import { useNavigate } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function CreateGenre() {
    let navigate = useNavigate()

    const handleSave = () =>{
        navigate('/genres')
    }
    return<>
        <h3>Create Genre</h3>
        <GenreForm model={{name: ''}} onSubmit={
            async value =>{
                await new Promise(r => setTimeout(r, 1));
                console.log(value);
            }
        } />
    </>
}