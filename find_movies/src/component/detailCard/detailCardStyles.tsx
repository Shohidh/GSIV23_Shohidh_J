import { makeStyles } from "@material-ui/core";
import { GREY } from "../../utils/colors";

const fontStyle = {
    color: GREY
}
export const DetailCardStyles = makeStyles(() => ({
    cardListRoot: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "6px"
    },
    displayFlexWrap: {
        display: "flex",
        alignItems: "center"
    },
    title: {
        ...fontStyle,
        fontSize: "16px",
        fontWeight: "bold",
    },
    basicFont: {
        ...fontStyle,
        fontSize: "14px"
    }
}))