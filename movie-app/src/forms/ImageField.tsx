import { useFormikContext } from 'formik';
import React, { ChangeEvent, useState } from 'react'


export default function ImageField({
    displayName,
    imageURL = '',
    field,
}: imageFieldProps) {
    const [imgBase64, setImgBase64] = useState('')
    const [imgURL, setImgURL] = useState(imageURL)
    const {values} = useFormikContext<any>()

    const divStyle = {marginTop: '10px'};
    const imgStyle = {width: '450px'};

    const handleOnChange = (eventsArgs: ChangeEvent<HTMLInputElement>) =>{
        if(eventsArgs.currentTarget.files){
            const file = eventsArgs.currentTarget.files[0];
            if(file){
                toBase64(file).then((base64representation: string) => setImgBase64(base64representation))
                    .catch(error => console.error(error))
                    values[values.field]
                setImgURL('')
            }else{
                setImgBase64('')
            }
        }
    }

    // convert img to 64 base
    const toBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) =>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return (
        <div className='mb-3'>
            <label>{displayName}</label>
            <div>
                <input type="file" accept='.jpg, .jpeg, .png' onChange={handleOnChange} />
            </div>
            {imgBase64 ? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imgBase64} alt="selected" />
                    </div>
                </div>
                : null
            }
            {imgURL ? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imgURL} alt="selected" />
                    </div>
                </div>
                : null
            }
        </div>
    )
}

interface imageFieldProps{
    displayName: string;
    imageURL: string;
    field: string;
}