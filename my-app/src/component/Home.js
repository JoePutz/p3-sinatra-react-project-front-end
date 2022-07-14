import React from "react";
import { Header, Container,Card,Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import AnimalCardTwo from "./AnimalCardTwo";

function Home( {animal}){

    
    return (
        <Container textAlign="center">
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Welcome to the Zoo!</h1>
            <h3 class="ui small">Select a Habitat to View All The Animals</h3>      
            <h3 class="ui small">Or View the Animals and see their Habitats</h3>     
        </Header>
        <Container>
            <div  class="ui two column divided grid">
                <div textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/animals">Animals</Link>
                    </h2>
                </div>
                <div textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/habitats">Habitats</Link>
                    </h2>
                </div>
            </div>
        </Container>
        <div textAlign="center">
        <Header>View Our Newest Addition!</Header>
            <Card class="ui centered card">
                <Header>Animal Name: {animal.name}</Header>
                <Header>Scientific Name: {animal.scientific_name}</Header>
                <Image src={animal.image}></Image>
            </Card>
        </div>
        </Container>
    )
}

export default Home;