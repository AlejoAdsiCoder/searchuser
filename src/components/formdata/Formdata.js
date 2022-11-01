import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Formdata = () => {

    const [typedoc, setTypedoc] = useState(1)
    const [document, setDocument] = useState('')
    const [users, setUsers] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [btn, setBtn] = useState(true);

    const getData = async ()=>{
        await fetch('http://localhost:3000/users', {
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
      }

      const filteredTypedocs = (myusers) => myusers.filter(function (e) {
        console.log(e.tipo_documento);

        return (
            
            e.tipo_documento == typedoc)
        }
    );
      const filteredDocs = (myusers) => myusers.filter(e => e.numero_documento === document);

      const Result = async () => {

        let result = users;
            result = filteredTypedocs(result);
            result = filteredDocs(result);

            console.log(filteredTypedocs)
            // await setSearchResults(result)
            return result
      }

      useEffect(() => {
        getData();
        
      }, [])
    
    const getTypedoc = e => {
        console.log(e.target.value)
        setTypedoc(e.target.value);
    }


    const getDocument = e => {
        console.log(e.target.value)
        setDocument(e.target.value);
        if(document.trim().length !== 0) {
          setBtn(false)
        }
    }

  return (
    <div>
        <Form className="col-md-5 mx-auto">
            <Form.Text muted>
              Todos los campos son obligatorios
            </Form.Text>
            <Form.Group>
                <Form.Label>Tipo de documento</Form.Label>
                <Form.Select className="tipo_doc" onChange={getTypedoc} aria-label="Default select example">
                    <option value="1">Cédula de ciudadanía</option>
                    <option value="2">Cédula de extranjeria</option>
                    <option value="3">Tarjeta de identidad</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Label>Numero de documento</Form.Label>
                <Form.Control
                    type="number"
                    className="nombre"
                    onChange={getDocument}
                />
            </Form.Group>
            <Link style={{margin: '4px', color: 'white', textDecoration: 'none'}} to={{ pathname: `/resume/${typedoc}/${document}`}}>
              <Button style={{borderRadius: '50px', width: '100%'}} variant="primary" size="lg" disabled={btn}>
                
                  Buscar
                 
              </Button>
             </Link>
        </Form>
    </div>
  )
}

export default Formdata