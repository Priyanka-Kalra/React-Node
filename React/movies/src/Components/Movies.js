import { movies } from "./getMovies";
import React, { Component } from 'react'

export default class Movies extends Component {
    render() {
        let movie = movies.results
        return (
            <div>
                <>
                    {
                        movie.length === 0 ? <div class="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> :
                            <div>
                                <h3 className="text-center">Trending</h3>
                                {/*style={{textAlign:'center',textDecoration:'bold'}}*/}
                                <div className="movie-list">
                                    {
                                        movie.map((value)=>(
                                            <div className="card movie-card" >
                                                <img className="card-img-top movier-image" src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`}  alt={value.title} />
                                                <h5 className="card-title movie-title">{value.original_title}</h5>
                                                {/*<p className="card-text movie-text">{value.overview}</p>*/}
                                                <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                                    <a href="#" className="btn btn-primary movie-button" >Add To Favourites</a>
                                                </div>

                                            </div>
                                        ))

                                    }
                                </div>
                                <div style={{display:'flex' , justifyContent:'center'}}>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                    }

                </>
            </div>
        )
    }
}

