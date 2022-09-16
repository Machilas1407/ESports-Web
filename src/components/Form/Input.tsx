import {InputHTMLAttributes} from 'react'  

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}  // Tipo global do typescript que referencia o input html

export default function Input(props: InputProps){
    return (
        <input 
            {...props} // aqui estou prgando todas as propiedades e passando para o input
            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'               />  
    )
}