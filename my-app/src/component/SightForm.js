import React from "react";
import { useState } from "react";
import { Form, Button, Input, Label, Container,Dropdown } from "semantic-ui-react";

function SightForm( {habitat, animals} ) {
    const [ animalName, setAnimalName] = useState('')
    const animalsDisplay = (animals ? animals.map((animal)=>{
        return {
            key: animal.id,
            text: animal.name,
            value: animal.name
            }
        }): null)


    function handleSubmitSight(e) {
        e.preventDefault();
        alert("Nice catch! Thanks for contributing to animal conservation!")
        const sightingData = {
            habitat_id: habitat.id,
            animal_id: animals.find(animal => animal.name == animalName).id,
            seen: Date()
        }

        fetch('http://localhost:9292/sightings/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sightingData),
        })
            .then((r) => r.json())
            .then((newSighting) => console.log(newSighting));
        }
        

return (
    <Form onSubmit={(e)=>{handleSubmitSight(e)}} >
            <Form.Field>
                <Label for="Seen">Animal Seen:</Label>
                {/* <Input placeholder='Animal' onChange={(e)=>setAnimalName(e.target.value)} value={animalName}/> */}
                <Dropdown 
                placeholder='Select Existing Animal'
                selection
                options={animalsDisplay}
                onChange={(e)=>setAnimalName(e.target.textContent)}
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
)
}

export default SightForm;