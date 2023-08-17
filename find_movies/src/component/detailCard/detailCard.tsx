import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getImage } from "../movieCard/movieCard";
import { DetailCardStyles } from "./detailCardStyles";
import axios from "axios";
import { MovieType } from "../../model/movieModel";
import Header from "../header/header";

function DetailCard() {
    const classes = DetailCardStyles();
    const [movieData, setMovieData] = useState<MovieType>();
    const [director, setDirector] = useState<string>("");
    const [cast, setCast] = useState<string[]>([]);
    useEffect(() => {
        const movieId = window.location.href.split("/")[window.location.href.split("/").length - 1]
        if ("" !== movieId) {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=66721bc2a39446ee5c1a01573704a9bb&language=en-US&append_to_response=credits`)
                .then((result: any) => {
                    setMovieData(result.data)
                })
                .catch((err: any) => {
                    console.log(err)
                })
        }
    }, [])

    useEffect(() => {
        if (movieData) {
            setDirector(movieData.credits?.crew.filter(({ job }) => job === 'Director')[0].name)
            let tempCast: string[] = [];
            if (undefined !== movieData.credits?.cast)
                movieData.credits?.cast.forEach((cast: any) => {
                    tempCast = tempCast.concat(cast.name);
                })
            setCast(tempCast);
        }
    }, [movieData])

    return (
        <>
            <Header view="detail" />

            {movieData ?
                <Card className={classes.cardListRoot} >
                    <CardMedia>
                        {getImage(movieData?.poster_path)}
                    </CardMedia>
                    <CardContent>
                        <div className={classes.displayFlexWrap} >
                            <Typography className={classes.title}>
                                {movieData.title}
                            </Typography>
                            <Typography className={classes.basicFont}>
                                {`(${movieData.vote_average})`}
                            </Typography>
                        </div>
                        <div className={classes.displayFlexWrap} >
                            <Typography className={classes.basicFont}>
                                {`${movieData.release_date.split("-")[0]} | ${movieData.runtime} mins | ${director}`}
                            </Typography>
                        </div>
                        <Typography>
                            {`Cast: ${cast.toString()}`}
                        </Typography>
                        <Typography>
                            {`Description: ${movieData.overview}`}
                        </Typography>
                    </CardContent>
                </Card >
                : <></>}
        </>
    )
}

export default DetailCard;