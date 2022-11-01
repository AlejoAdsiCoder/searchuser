import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const Resume = () => {

    const { td, ced } = useParams();

    const [users, setUsers] = useState([])


/*
    const Result = () => {

        let result = users;
            result = filteredTypedocs(result);
            result = filteredDocs(result);

            console.log(filteredTypedocs)
            // setSearchResults(result)
      } */

    useEffect(() => {
        fetch('data.json', {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
            .then(function(response){
            console.log(response)
            return response.json();
            })
            .then(function(json) {
            console.log(json.users);
                setUsers(json.users)
            });

        console.log(td)

        console.log(ced)
        
        // Result()

    }, [])
    

    const filteredTypedocs = (myusers) => myusers.filter(function (e) {
        console.log(e.tipo_documento);

        return (
            
            e.tipo_documento === td)
        }
    );
      const filteredDocs = (myusers) => myusers.filter(e => e.numero_documento === ced);

  return (
    <div>
        <Form>
            {users.map(user =>(
                <>
            <Form.Group>
                
                <Form.Label>Primer apellido</Form.Label>
                <Form.Control
                    type="text"
                    className="nombre"
                    value={user.apellido1}
                />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    className="nombre"
                    value={user.nombre}
                />
            </Form.Group>
            </>
            ))}
        </Form>
    </div>
  )
}
