import Button from "../utils/Button";
import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import configureValidation from "../Validation";
import { genreCreationDTO } from "./genres.model";

configureValidation()

export default function GenreForm(props: genreFormProps) {
    return(
        <Formik 
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) =>(
                <Form>
                    <TextField displayName="Name" field="name" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}

        </Formik>
    )
}

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(value: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}