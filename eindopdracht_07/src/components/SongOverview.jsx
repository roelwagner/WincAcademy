import React, { Component } from "react";
import Header from "./Header";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {

    constructor() {
        super()
        this.state = {
            songs: [
                {id: 1, title: "Ring of fire", artist: "Johnny Cash", genre: "Country", rating: 5},
                {id: 2, title: "the Dock of the Bay", artist: "Ottis Redding", genre: "Soul", rating: 5},
            ]
        }
    }

    addSong = event => {
        event.preventDefault();
        const id = this.state.songs.length + 1;
        const title = event.target.previousSibling.previousSibling.previousSibling.previousSibling.value;
        const artist = event.target.previousSibling.previousSibling.previousSibling.value;
        const genre = event.target.previousSibling.previousSibling.value;
        const rating = event.target.previousSibling.value;
        
        if((artist!=="")&&(artist!== null)){
            if((title!=="")&&(title!== null)){
                const song = {id: id, title: title, artist: artist, genre: genre, rating: rating};
                const newList = [song, ...this.state.songs];
                this.setState({songs: newList})
            }
        }else {
            alert("New Songs need: title & artist minimum!");
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <SongForm addSong={this.addSong}/>
                    <table style={{width: "100%"}}>
                        <tbody>
                            <tr className="song-header">  
                                <th className="song-header__item">Song</th>
                                <th className="song-header__item">Artist</th>
                                <th className="song-header__item">Genre</th>
                                <th className="song-header__item">Rating</th>
                            </tr>
                            <SongList songs={this.state.songs}/>
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default SongOverview;