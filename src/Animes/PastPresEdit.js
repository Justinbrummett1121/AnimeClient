import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'

const PastPresEdit = (props) => {
    const [editNameOfAnime, setEditNameOfAnime] = useState(props.pastPresToUpdate.nameOfAnime);
    const [editLastEpisodeSeen, setEditLastEpisodeSeen] = useState(props.pastPresToUpdate.editLastEpisodeSeen);
    const [editRating1To10, setEditRating1To10] = useState(props.pastPresToUpdate.rating1To10);
    const [editFavoriteEpEpsFight, setEditFavoriteEpEpsFight] = useState(props.pastPresToUpdate.favoriteEpEpsFight);
    const [editFavoriteCharacter, setEditFavoriteCharacter] = useState(props.pastPresToUpdate.favoriteCharacter);

    const pastPresUpdate = (event, pastpres) => {
        event.preventDefault();
        const id = props.pastPresToUpdate.id;
        fetch(`https://jtb-theanimelist.herokuapp.com/pastpres/${id}`, {
            method: 'PUT',
            body: JSON.stringify({nameOfAnime: editNameOfAnime, lastEpisodeSeen: editLastEpisodeSeen, rating1To10: editRating1To10, favoriteEpEpsFight: editFavoriteEpEpsFight, favoriteCharacter: editFavoriteCharacter}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchPastPres();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Record an Anime</ModalHeader>
            <ModalBody>
                <Form onSubmit={pastPresUpdate}>
                    <FormGroup>
                        <Label htmlFor="nameOfAnime">Edit Name of Anime</Label>
                        <Input name="nameOfAnime" value={editNameOfAnime} onChange={(e) => setEditNameOfAnime(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastEpisodeSeen">Edit Last Ep Seen</Label>
                        <Input name="lastEpisodeSeen" value={editLastEpisodeSeen} onChange={(e) => setEditLastEpisodeSeen(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="rating1To10">Rating from 1 To 10</Label>
                        <Input name="rating1To10" value={editRating1To10} onChange={(e) => setEditRating1To10(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="favoriteEpEpsFight">Favorite Ep Eps Fight</Label>
                        <Input name="favoriteEpEpsFight" value={editFavoriteEpEpsFight} onChange={(e) => setEditFavoriteEpEpsFight(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="favoriteCharacter">Favorite Character</Label>
                        <Input name="favoriteCharacter" value={editFavoriteCharacter} onChange={(e) => setEditFavoriteCharacter(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update the Anime!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default PastPresEdit;