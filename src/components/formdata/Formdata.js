import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Formdata = () => {

    const [typedoc, setTypedoc] = useState('')
    const [document, setDocument] = useState('')
    const [users, setUsers] = useState([])
    const [searchResults, setSearchResults] = useState([]);

    const getData = async ()=>{
        await fetch('data.json', {
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
      }

      const filteredTypedocs = (myusers) => myusers.filter(function (e) {
        console.log(e.tipo_documento);

        return (
            
            e.tipo_documento == typedoc)
        }
    );
      const filteredDocs = (myusers) => myusers.filter(e => e.numero_documento === document);

      const Result = () => {

        let result = users;
            result = filteredTypedocs(result);
            result = filteredDocs(result);

            console.log(filteredTypedocs)
            setSearchResults(result)
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

    }

    const handleSearch = () => {
        try {
            Result()
            console.log(searchResults)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <Form>
            <Form.Group>
                <Form.Label>Tipo de documento</Form.Label>
                <Form.Select className="tipo_doc" onChange={getTypedoc} aria-label="Default select example">
                    <option value="1">Cédula de ciudadanía</option>
                    <option value="2">Cédula de extranjeria</option>
                    <option value="3">Tarjeta de identidad</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Label>Numero de documentop</Form.Label>
                <Form.Control
                    type="text"
                    className="nombre"
                    onChange={getDocument}
                />
            </Form.Group>
            <Link style={{margin: '4px'}} to={{ pathname: `/resume/${typedoc}/${document}`}}>
              <Button variant="primary">
                  Buscar
              </Button>
            </Link>
        </Form>
        <Table striped responsive>
        <tbody>
          {searchResults.map(item => (
            <tr>
              <>
              <td>{item.nombre}</td>
              </>
            </tr>
          ))}
        </tbody>
        </Table>
    </div>
  )
}

export default Formdata