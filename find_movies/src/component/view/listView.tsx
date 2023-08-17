import React, { useEffect, useState } from "react";
import Header from "../header/header";
import axios from "axios";
import { getCurrentDate } from "../../utils/dateUtils";
import { MovieType } from "../../model/movieModel";
import InfiniteScroll from "react-infinite-scroller";
import { ImageList, ImageListItem } from "@material-ui/core";
import MovieCard from "../movieCard/movieCard";
import { ListViewStyles } from "./listViewStyles";
import { useHistory } from "react-router-dom";
import { getMovieLink } from "../../utils/links";

function ListView() {

    const [page, setPage] = useState<number>(1);
    const [movieList, setMovieList] = useState<MovieType[]>([]);
    const [searchedValue, setSearchedValue] = useState<string>("");

    const classes = ListViewStyles();

    const history = useHistory();

    const currentDate: string = getCurrentDate();

    const getMovieList = (inMovieList: MovieType[]) => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=${Number.isNaN(page) ? 1 : page}&api_key=66721bc2a39446ee5c1a01573704a9bb&sort_by=primary_release_date.asc&primary_release_date.gte=${currentDate}`)
            .then((result: any) => {
                console.log("result")
                console.log(result.data.results);
                setPage(Number(result.data.page) + 1)
                setMovieList(inMovieList.concat(result.data.results))
            })
            .catch((err: any) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if ("" === searchedValue) {
            getMovieList([])
        } else {
            axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchedValue}&api_key=66721bc2a39446ee5c1a01573704a9bb&primary_release_date.gte=${currentDate}`)
                .then((result: any) => {
                    setMovieList(result.data.results)
                })
                .catch((err: any) => {
                    console.log(err)
                })
        }
    }, [searchedValue])

    useEffect(() => {
        console.log("Movuie");
        console.log(movieList)
    }, [movieList])
    useEffect(() => {
        getMovieList([])
    }, [])

    const loadMore = () => {
        if ("" === searchedValue) {
            getMovieList(movieList)
        }
    }

    const handleOnMovieClick = (id: number) => {
        history.push(getMovieLink(id.toString()))
    }

    return (
        <>
            <Header view="list" setSearchedValue={setSearchedValue} />
            <div className={classes.divWrap}>
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={1}
                    className={classes.infiniteScroll}
                    loadMore={loadMore}
                    hasMore={true}
                    useWindow={false}
                >
                    <ImageList style={{ overflowX: "hidden" }}>
                        {movieList.map((movie: MovieType) => {
                            return (
                                <ImageListItem onClick={() => handleOnMovieClick(movie.id)} key={movie.id} className={classes.listItem}>
                                    <MovieCard movieDetails={movie} />
                                </ImageListItem>
                            )
                        })}
                    </ImageList>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default ListView;