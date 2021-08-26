import React from 'react';
import { alpha } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import PostYourRentalServices from './PostYourRentalServices';



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 5,
        height: 400
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 0),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: "Inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('1792')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('1792')]: {
            display: 'none',
        },
    },
    dont_show_search: {
        display: 'flex'
    },
}));

export default function SearchBar() {
    const classes = useStyles();


    return (
        <div><br />
            <Card className={classes.root} variant="outlined">
                <CardContent style={{ margin: '0rem' }} >
                    <br /><br />
                    <br /><br />
                    <Typography variant='h6'>Search location where you want a room/flat on rent
                        <br /><br />

                        <Toolbar style={{
                            borderBottomStyle: "solid", width: "55rem", alignContent: "center", margin: "auto",
                            width: "80%",
                            padding: "3px", borderBottomColor: "1px red"
                        }} className={classes.dont_show_search}>
                            <div className={classes.search} >
                                <div className={classes.searchIcon}>
                                    <RoomIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Toolbar>

                    </Typography>
                </CardContent>
            </Card>
            <br /><br />
            <PostYourRentalServices />
        </div>
    );
}
