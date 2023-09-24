//import { movies } from "./getMovies";
import React, { Component } from 'react'
import axios from "axios";

export default class Movies extends Component {
    constructor() {
        super();
        this.state={
            hover:'',
            p_arr:[1],
            curPage:1,
            movies:[],
            favourites:[]
        }
    }
    //setState is asynchronus
    async componentDidMount() {

        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ed98488fed75f98a781e40752074339e&language=en-US&page=${this.state.curPage}`)
        let data=res.data
        this.setState({
            movies:[...data.results]
        })
    }

    changeMovies=async()=>{
        let temp_arr=[];
        for(let i=1;i<=this.state.curPage;i++){
            temp_arr.push(i);
        }
        this.setState({
            p_arr:[...temp_arr],
        })
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ed98488fed75f98a781e40752074339e&language=en-US&page=${this.state.curPage}`)
        let data=res.data
        this.setState({
            movies:[...data.results],
        })
    }
    handleNext=async()=>{
        this.setState({
            curPage:this.state.curPage+1
        },this.changeMovies)
    }
    handlePrev=async()=>{
        if(this.state.curPage!==1){
            this.setState({
                curPage:this.state.curPage-1
            },this.changeMovies)
        }

    }
    handleChange= async(value)=>{
        if(this.state.curPage!==value){
            this.setState({
                curPage:value
            },this.changeMovies)
        }
    }
    handleFav=(obj)=>{


        let oldData=JSON.parse(localStorage.getItem("movies") ||"[]")
        if(this.state.favourites.includes(obj.id)){
            oldData=oldData.filter((mov)=>mov.id!==obj.id)

        }
        else{
            oldData.push(obj);

        }
        localStorage.setItem("movies",JSON.stringify(oldData))
        this.handleFavState()

        //console.log(oldData)
    }
    handleFavState=()=>{
        let oldData=JSON.parse(localStorage.getItem('movies')||"[]")
        let temp=oldData.map((mov)=>mov.id)
        this.setState({
            favourites:[...temp]
        })

    }
    render() {

        //let movie = movies.results

        return (

            <div>
                <>
                    {
                        this.state.movies.length === 0 ? <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> :
                            <div>
                                <h3 className="text-center">Trending</h3>
                                {/*style={{textAlign:'center',textDecoration:'bold'}}*/}
                                <div className="movie-list">
                                    {
                                        this.state.movies.map((value)=>(
                                            <div className="card movie-card" onMouseEnter={()=>this.setState({hover:value.id})}  onMouseLeave={()=>this.setState({hover:''})}>
                                                <img className="card-img-top movier-image" src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`}  alt={value.title} />
                                                <h5 className="card-title movie-title">{value.original_title}</h5>
                                                {/*<p className="card-text movie-text">{value.overview}</p>*/}
                                                <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                                    {
                                                        this.state.hover===value.id &&
                                                        <a className="btn btn-primary movie-button" onClick={()=>{this.handleFav(value)}}>
                                                            {
                                                                this.state.favourites.includes(value.id)?"Remove From Favourites":"Add To Favourites"
                                                            }
                                                        </a>
                                                    }
                                                </div>

                                            </div>
                                        ))

                                    }
                                </div>
                                <div style={{display:'flex' , justifyContent:'center'}}>


                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" onClick={this.handlePrev}>Previous</a></li>

                                            {
                                                this.state.p_arr.map((value)=>(
                                                    <li className="page-item active"><a className="page-link" onClick={()=>this.handleChange(value)}>{value}</a></li>
                                                ))
                                            }
                                            <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
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

