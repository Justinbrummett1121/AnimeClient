import React from 'react';
import {Table, Button} from 'reactstrap';

const PastPresTable = (props) => {

    const deletePastpres = (pastpres) => {
        fetch(`http://localhost:3000/pastpres/${pastpres.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPastPres())
    }

    const pastPresMapper = () => {
        return props.pastpres.map((pastpres, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{pastpres.id}</th>
                    <td>{pastpres.nameOfAnime}</td>
                    <td>{pastpres.lastEpisodeSeen}</td>
                    <td>{pastpres.rating1To10}</td>
                    <td>{pastpres.favoriteEpEpsFight}</td>
                    <td>{pastpres.favoriteCharacter}</td>
                    <td>
                        <button color="warning" onClick={() => {props.editUpdatePastPres(pastpres); props.updateOn()}}>Update</button>
                        <button color="danger" onClick={() => {deletePastpres(pastpres)}}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Past and Present Anime</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name of Anime</th>
                    <th>Last Ep seen</th>
                    <th>Rating from 1 to 10</th>
                    <th>Favorite Ep Eps Fight</th>
                    <th>Favorite Character</th>
                </tr>
            </thead>
            <tbody>
                {pastPresMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default PastPresTable;