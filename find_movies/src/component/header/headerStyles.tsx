import { makeStyles } from "@material-ui/core";
import { GREY, LIGHT_GREY, WHITE } from "../../utils/colors";

export const HeaderStyles = makeStyles(() => ({
    searchPaperStyle: {
        borderRadius: "7px",
        backgroundColor: LIGHT_GREY,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600
    },
    searchInputStyle: {
        flex: 1,
        color: GREY
    },
    appBarStyle: {
        backgroundColor: WHITE,
    },
    searchIcon: {
        padding: "0px"
    },
    toolbarStyle: {
        justifyContent: "space-between"
    },
    heading: {
        color: GREY,
        fontWeight: "bold"
    }
}))