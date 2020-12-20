import React, { Component } from "react";
import Header from "./Header";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SortSongs from "./SortSongs";

class SongOverview extends Component {

    constructor() {
        super()
        this.state = {
            songs: [
                {id: 1, title: "a ring of fire", artist: "johnny cash", genre: "country", rating: 4},
                {id: 2, title: "the dock of the bay", artist: "ottis redding", genre: "soul", rating: 5},
            ],
            sortFactor: "Artist",
        }
    }

    addSong = event => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 999999999999999 + 1)
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

    delSong = event => {
        const songList = [...this.state.songs]
        const delID = parseInt(event.target.id);
        const songToDelete = songList.find(song => song.id === delID);
        const newSongList = songList.filter(song => song !== songToDelete);
        this.setState({songs: newSongList})
    }

    setSortFactor = event => {
        const sortFactor = event.target.value
        this.setState({sortFactor: sortFactor});
    }

    sortSongList = event => {
        const currentFilter = event.target.value;

        const newList = [...this.state.songs];
        if(this.state.sortFactor === "Artist" && currentFilter === "Ascending"){
            newList.sort((a,b) => (a.artist >= b.artist) ? 1 : -1)
        } else if (this.state.sortFactor === "Artist" && currentFilter === "Descending"){
            newList.sort((a,b) => (a.artist >= b.artist) ? -1 : 1)
        }else if(this.state.sortFactor === "Title" && currentFilter === "Ascending"){
            newList.sort((a,b) => (a.artist >= b.artist) ? 1 : -1)
        } else if (this.state.sortFactor === "Title" && currentFilter === "Descending"){
            newList.sort((a,b) => (a.artist >= b.artist) ? -1 : 1)
        }
        this.setState({songs: newList})
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <SongForm addSong={this.addSong}/>
                <SortSongs setSortFactor={this.setSortFactor} sortSongList={this.sortSongList}/>
                    <table style={{width: "100%"}}>
                        <tbody>
                            <tr className="song-header">  
                                <th className="song-header__item">Song</th>
                                <th className="song-header__item">Artist</th>
                                <th className="song-header__item">Genre</th>
                                <th className="song-header__item">Rating</th>
                            </tr>
                            <SongList songs={this.state.songs} delSong={this.delSong} />
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default SongOverview;