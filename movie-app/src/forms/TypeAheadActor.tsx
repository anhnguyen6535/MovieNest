import { Typeahead } from 'react-bootstrap-typeahead';
import { actorMovieDTO } from '../actors/actor.model';
import { ReactElement, useRef, useState } from 'react';
import { TypeaheadRef } from 'react-bootstrap-typeahead/types/core';


export default function TypeAheadActor(props: typeAheadActorProps) {
    const actors: actorMovieDTO[] = [
        {id: 1, name: 'Cynthia Erivo', character: 'Elphaba Thropp', picture: 'https://imageio.forbes.com/specials-images/imageserve/6734b1a4929e3fc9aa0adbd7/Cynthia-Erivo-plays-Elphaba-in-Wicked/960x0.jpg?format=jpg&width=960'},
        {id: 2, name: 'Ariana Grande', character: 'Galinda "Glinda" Upland', picture: 'https://i.redd.it/q5fgywn6aqjd1.jpeg'},
        {id: 3, name: 'Jonathan Bailey', character: 'Fiyero Tigelaar', picture: 'https://m.media-amazon.com/images/M/MV5BY2JiNTgzNDgtMjFmZS00ZDA1LWI5NDEtODQ2M2NjOTE0OWE1XkEyXkFqcGc@._V1_.jpg'},
    ]
    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);
    const typeaheadRef = useRef<TypeaheadRef>(null);

    function handleDragStart(actor: actorMovieDTO){
        setDraggedElement(actor)
    }

    function handleDragOver(actor: actorMovieDTO) {
        if(!draggedElement) return;
        if(actor.id !== draggedElement.id){
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);
            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }   
    return (
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead
                ref={typeaheadRef}
                id="typeahead"
                onChange={actors =>{
                    const actor = actors[0] as actorMovieDTO
                    if(actor && props.actors.findIndex(x => x.id === actor.id) === -1){
                        props.onAdd([...props.actors, actor]);
                    }
                    typeaheadRef.current?.clear();
                }}
                options={actors}
                labelKey="name"
                filterBy={['name']}
                placeholder='Write the name of the actor'
                minLength={1}
                flip={true}
                renderMenuItemChildren = {(actor: actorMovieDTO) =>(
                    <>
                        <img alt='actor' src={actor.picture}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px',
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />
            <ul className='list-group'>
                {props.actors.map(actor => 
                    <li key={actor.id} draggable={true} 
                        onDragStart={() => handleDragStart(actor)} 
                        onDragOver={() => handleDragOver(actor)}
                        className='list-group-item list-group-item-action'>
                        {props.listUI(actor)}
                        <span className='badge badge-primary badge-pill pointer text-dark' 
                            style={{marginLeft: '0.5rem'}}
                            onClick={() => props.onRemove(actor)}
                        >
                            X
                        </span>
                    </li>)}
            </ul>
        </div>
    )
}
interface typeAheadActorProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actors: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}