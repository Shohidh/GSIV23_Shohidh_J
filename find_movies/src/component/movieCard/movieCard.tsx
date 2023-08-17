import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { MovieType } from "../../model/movieModel";
import { MovieCardStyles } from "./movieCardStyles";

export interface MovieCardProps {
    movieDetails: MovieType
}

export const getImage = (posterPath: string) => {
    return (
        <img
            style={{ height: "360px", width: "235px" }}
            src={"https://image.tmdb.org/t/p/original" + posterPath}
            loading="lazy"
        />
    )
}

function MovieCard(movieCardProps: MovieCardProps) {

    const classes = MovieCardStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardMedia>
                {getImage(movieCardProps.movieDetails.poster_path)}
            </CardMedia>
            <CardContent className={classes.cardContentRoot}>
                <div>
                    <div className={classes.titleratingDiv}>
                        <Typography className={classes.title}>
                            {movieCardProps.movieDetails.title}
                        </Typography>
                        <Typography className={classes.rating}>
                            {`Rating: ${movieCardProps.movieDetails.vote_average}`}
                        </Typography>
                    </div>
                    <Typography className={classes.overView}>
                        {movieCardProps.movieDetails.overview}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default MovieCard;