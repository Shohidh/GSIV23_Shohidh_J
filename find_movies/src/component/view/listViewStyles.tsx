import { makeStyles } from "@material-ui/core";

export const ListViewStyles = makeStyles(() => ({
    listItem: {
        height: "auto !important",
        width: "auto !important"
    },
    infiniteScroll: {
        maxHeight: "87vh",
        padding: "10px",
    },
    divWrap: {
        maxHeight: "87vh",
        overflowX: "hidden"
    }
}))