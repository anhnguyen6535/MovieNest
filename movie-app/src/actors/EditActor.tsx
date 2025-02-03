import ActorForm from "./ActorForm";

export default function EditActor() {
    return<>
        <h3>Edit Genre</h3>
        <ActorForm 
            model={{name: 'Tom Holland', dateOfBirth: new Date('1996-06-01T00:00:00'), 
                    pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg',
                    biography: `# Something
This person was born in **LR** `,
                }} 
            onSubmit={values => console.log(values)}
        />
        
    </>
}