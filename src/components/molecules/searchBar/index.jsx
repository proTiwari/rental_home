import React, {useEffect, useRef, useState} from "react";
import styles from './styles.module.scss'
import { IoClose, IoSearch } from "react-icons/io5";
import {Button} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import IconButton from "@material-ui/core/IconButton";
import {useClickOutside} from "react-click-outside-hook";
import MoonLoader from "react-spinners/MoonLoader";

function SearchBar(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [parentRef, isClickedOutside] = useClickOutside();
    const inputRef = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setLoading] = useState(false);

    const changeHandler = (e) => {
        e.preventDefault();

        setSearchQuery(e.target.value);
    };

    const expandContainer = () => {
        setExpanded(true);
    };

    const collapseContainer = () => {
        setExpanded(false);
        setSearchQuery("");
        setLoading(false);
        if (inputRef.current) inputRef.current.value = "";
    };

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    return (
        <div className={styles.container} ref={parentRef}>
            <div className={styles.search_bar_container}>
                <div className={styles.input_container}>
                    <IoSearch className={styles.search_icon_prefix}/>
                    <input
                        className={styles.input}
                        placeholder="Search for Room/Home"
                        onFocus={expandContainer}
                        ref={inputRef}
                        value={searchQuery}
                        onChange={changeHandler}

                    />

                </div>
                <IconButton
                    variant="contained"
                    color="secondary"
                    align="center"
                    className={styles.search_btn}
                >
                    <RoomIcon />
                </IconButton>
            </div>

            <div className={isExpanded? styles.dropdown_container + " " + styles.visible : styles.dropdown_container + " " + styles.invisible}>
                type above
            </div>

        </div>
    );
}

export default SearchBar