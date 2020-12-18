import React from "react";

const SongForm = (props) => {
    return(
        <div>
            <form className="songform">
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="artist" placeholder="Artist" />
                <select id="genre" name="genre">
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Country">Country</option>
                    <option value="Classic">Classic</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Soul">Soul</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                </select>  
                <select id="rating" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>    
                <button onClick={props.addSong}>Add Song</button>
            </form>
        </div>
    )
}

export default SongForm;