import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const PastPresCreate = (props) => {
    const [nameOfAnime, setNameOfAnime] = useState('');
    const [lastEpisodeSeen, setLastEpisodeSeen] = useState('');
    const [rating1To10, setRating1To10] = useState('');
    const [favoriteEpEpsFight, setFavoriteEpEpsFight] = useState('');
    const [favoriteCharacter, setFavoriteCharacter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jtb-theanimelist.herokuapp.com/pastpres', {
            method: 'POST',
            body: JSON.stringify({nameOfAnime: nameOfAnime, lastEpisodeSeen: lastEpisodeSeen, rating1To10: rating1To10, favoriteEpEpsFight: favoriteEpEpsFight, favoriteCharacter: favoriteCharacter}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setNameOfAnime('');
            setLastEpisodeSeen('');
            setRating1To10('');
            setFavoriteEpEpsFight('');
            setFavoriteCharacter('');
            props.fetchPastPres();
        })
    }

    return(
        <>
            <h3>Record an Anime</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="nameOfAnime">Name of Anime</Label>
                    <Input name="nameOfAnime" value={nameOfAnime} onChange={(e) => setNameOfAnime(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastEpisodeSeen">Last Episode Seen</Label>
                    <Input name="lastEpisodeSeen" value={lastEpisodeSeen} onChange={(e) => setLastEpisodeSeen(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating1To10">Rating from 1 to 10</Label>
                    <Input name="rating1To10" value={rating1To10} onChange={(e) => setRating1To10(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="favoriteEpEpsFight">Favorite Ep Eps or Fight</Label>
                    <Input name="favoriteEpEpsFight" value={favoriteEpEpsFight} onChange={(e) => setFavoriteEpEpsFight(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="favoriteCharacter">Favorite Character</Label>
                    <Input name="favoriteCharacter" value={favoriteCharacter} onChange={(e) => setFavoriteCharacter(e.target.value)}/>
                </FormGroup>
                <button type="submit">Click to log</button>
                
            </Form>
        </>
    )
}

export default PastPresCreate