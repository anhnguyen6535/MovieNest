import ActorForm from "./ActorForm";

export default function EditActor() {
    return<>
        <h3>Edit Genre</h3>
        <ActorForm model={{name: 'Tom Holland', dateOfBirth: new Date('1996-06-01T00:00:00')}} 
            onSubmit={values => console.log(values)}
        />
        
    </>
}