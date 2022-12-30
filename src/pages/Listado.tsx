import {useEffect, useState} from "react";
/*librerias de botstrap*/
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
/*llamando a la api*/
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado=()=>{

    const[pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery]=useState("");
    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });
    const filtrarpokemon=pokemons?.slice(0,200).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })
    return (
        <>
            <h1>Pokedex con React - Daniel Luna</h1>
            <header>
                <input
                    value={query}
                    placeholder="Buscar Pokemon"
                    onChange={(event)=>setQuery(event.target.value.trim())}
                    type="text"
                />
            </header>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">
                        {filtrarpokemon?.slice(0,200).map((pokemon)=>(
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b>Tipo:</b> {pokemon.type}</Card.Header>
                            <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50"/>
                            <Card.Body>
                                <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Figure>
                                            <Figure.Image
                                            width={20}
                                            height={20}
                                            src="https://cdn-icons-png.flaticon.com/512/3208/3208700.png"
                                            />
                                            <b> HP :</b> {pokemon.hp}
                                        </Figure>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure>
                                            <Figure.Image
                                            width={20}
                                            height={20}
                                            src="https://cdn-icons-png.flaticon.com/512/297/297837.png"
                                            />
                                            <b> Ataque:</b> {pokemon.attack}
                                        </Figure>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure>
                                            <Figure.Image
                                            width={20}
                                            height={20}
                                            src="https://cdn-icons-png.flaticon.com/512/571/571923.png"
                                            />
                                            <b> Defensa:</b> {pokemon.defense}
                                        </Figure>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure>
                                            <Figure.Image
                                            width={20}
                                            height={20}
                                            src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
                                            />
                                            <b> E. Ataque:</b> {pokemon.sp_atk}
                                        </Figure>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure>
                                            <Figure.Image
                                            width={20}
                                            height={20}
                                            src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
                                            />
                                            <b> E. Defensa:</b> {pokemon.sp_def}
                                        </Figure>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure>
                                        <Figure.Image
                                            width={20}
                                            height={20}
                                            src="https://cdn-icons-png.flaticon.com/512/8853/8853763.png"
                                            />
                                            <b> Velocidad:</b> {pokemon.speed}
                                        </Figure>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;