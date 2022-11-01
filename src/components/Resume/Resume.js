import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export const Resume = () => {

    const { td, ced } = useParams();

    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/users/?numero_documento=${ced}&tipo_documento=${td}`, {
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
            console.log(json);
                setUsers(json)
            });

        console.log(td)

        console.log(ced)
        
        // Result()

    }, [])

  return (
    <div>
        <Form className="col-md-5 mx-auto">
            <h3>Información básica</h3>
            {users.map(user =>(
                <>
            <Form.Group>
                
                <Form.Label>Primer apellido</Form.Label>
                <Form.Control
                    type="text"
                    className="nombre"
                    value={user.apellido1}
                    disabled
                />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    className="nombre"
                    value={user.nombre}
                    disabled
                />
            </Form.Group>

            </>
            ))}
            <Link style={{margin: '4px', color: 'white', textDecoration: 'none'}} to={{ pathname: `/`}}>
              <Button variant="secondary" style={{borderRadius: '50px', width: '100%'}}>
                
                  Regresar
                 
              </Button>
             </Link>
        </Form>
    </div>
  )
}
