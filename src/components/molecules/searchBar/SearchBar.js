import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './search_bar.scss'

const useStyles = makeStyles((theme) => ({


    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },


}));


export default function SearchBar() {
    const classes = useStyles();

    return (
        <div id="search_bar_container" >
            <InputBase  style={{ borderBottom: '1px solid' , width:'80%'}}
                className={classes.inputInput}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>

    );
}
