import { useParams } from "react-router-dom"
import RedirectToLandingPage from "../utils/RedirectToLandingPage";

export default function EditGenre() {
    const {id}: any = useParams();

    const isValid = /^\d+$/.test(id);

    if(!isValid){
        return <RedirectToLandingPage />
    }
    return(
        <>
            <h3>Edit genre</h3>
            The id is {id}
        </>
    )
}