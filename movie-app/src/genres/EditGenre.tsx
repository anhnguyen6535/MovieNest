import { useParams } from "react-router-dom"
import RedirectToLandingPage from "../utils/RedirectToLandingPage";
import GenreForm from "./GenreForm";

export default function EditGenre() {
    const {id}: any = useParams();

    const isValid = /^\d+$/.test(id);

    if(!isValid){
        return <RedirectToLandingPage />
    }
    return(
        <>
            <h3>Edit genre</h3>
            <GenreForm model={{name: 'Action'}}
                onSubmit={
                    async value =>{
                        await new Promise(r => setTimeout(r, 1));
                        console.log(id);
                        console.log(value);
                    }
                }
            />
        </>
    )
}