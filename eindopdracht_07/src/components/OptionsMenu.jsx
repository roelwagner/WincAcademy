import React from "react";
import SortSongs from "./SortSongs";

const OptionsMenu = props => {
    return(
        <div className="options-menu">
            <SortSongs 
                setSortFactor={props.setSortFactor} 
                sortSongList={props.sortSongList} 
            />
        </div>
    );
}

export default OptionsMenu;