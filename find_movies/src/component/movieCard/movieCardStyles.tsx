import { makeStyles } from "@material-ui/core";
import { GREY } from "../../utils/colors";

const fontStyle = {
    fontSize: "14px",
    color: GREY
}
export const MovieCardStyles = makeStyles(() => ({
    title: {
        ...fontStyle,
        fontWeight: "bold",
        maxWidth: "130px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap"
    },
    rating: {
        ...fontStyle
    },
    titleratingDiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    cardRoot: {
        borderRadius: "15px",
        margin: "4px"
    },
    overView: {
        maxWidth: "200px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    cardContentRoot: {
        padding: "6px",
        paddingBottom: "6px"
    }
}))