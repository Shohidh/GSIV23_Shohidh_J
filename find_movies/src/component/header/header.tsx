import React, { useEffect, useState } from "react";
import {
    AppBar,
    IconButton,
    InputBase,
    Paper,
    Toolbar,
    Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { HeaderStyles } from "./headerStyles";
import { useHistory } from "react-router-dom";

export interface HeaderProps {
    view: "list" | "detail";
    setSearchedValue?: React.Dispatch<React.SetStateAction<string>>;
}
function Header(headerProps: HeaderProps) {
    const classes = HeaderStyles();

    const history = useHistory();

    const [searchedValue, setSearchedValue] = useState<string>("");

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setSearchedValue(event.target.value);
    };

    const onHomeClick = () => {
        history.push("/");
    }

    useEffect(() => {
        if (headerProps.setSearchedValue) {
            headerProps.setSearchedValue(searchedValue);
        }
    }, [searchedValue])

    return (
        <AppBar className={classes.appBarStyle} position="static">
            <Toolbar className={classes.toolbarStyle}>
                {"list" === headerProps.view ?
                    <Paper className={classes.searchPaperStyle}>
                        <IconButton className={classes.searchIcon}>
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.searchInputStyle}
                            placeholder={"Type to search Movies"}
                            onChange={handleSearchChange}
                            value={searchedValue}
                        />
                    </Paper> :
                    <Typography className={classes.heading}>
                        Movie Details
                    </Typography>
                }
                <IconButton>
                    <HomeIcon onClick={onHomeClick} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
