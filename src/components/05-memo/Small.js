import React from 'react'


//El uso del memo es clave para que este componente no se vuelva a renderizar cuando se renderiza la pagina principal.
//Solo se reenderiza cuando llaman directamente al componente.

export const Small = React.memo(({value}) => {

    console.log("Me volvi a llamar")

    return (
        <small>{value}</small>
    )
})
