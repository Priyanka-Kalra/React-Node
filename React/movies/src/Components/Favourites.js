import React, {Component} from 'react';

class Favourites extends Component {

    constructor() {
        super();
        this.state={
            genres:[],
            curr_genre:'All Genres',
            movies:[],
            curr_Text:"",//holds string for movie

        }
    }
    componentDidMount() {
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
            27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        let data=JSON.parse(localStorage.getItem("movies")||"[]")
        let temp=[];
        temp.push('All Genres')
        data.forEach((value)=> {
            if (!temp.includes(genreids[value.genre_ids[0]])) temp.push(genreids[value.genre_ids[0]]);
        })

        this.setState({
            genres:[...temp],
            movies:[...data],

        })
    }

    deleteFav=(mov)=>{

        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
            27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

        let data=JSON.parse(localStorage.getItem('movies')||'[]')
        let temp_mov=data.filter((obj)=>obj.id!==mov.id)
        let temp_genre=[]
        temp_genre.push('All Genres')
        temp_mov.forEach((mov)=>{
            if(!temp_genre.includes(genreids[mov.genre_ids[0]]))temp_genre.push(genreids[mov.genre_ids[0]])
        })

        localStorage.setItem('movies',JSON.stringify(temp_mov))
        this.setState({
            genres:[...temp_genre],
            movies:[...temp_mov]
        })

    }
    changeGenre= (genre)=>{
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
            27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

        let data=JSON.parse(localStorage.getItem('movies')||'[]')

        if(genre!=='All Genres'){
            data=data.filter((mov)=>genreids[mov.genre_ids[0]]===genre)
        }
        this.setState({
            movies:[...data],
            curr_genre:genre
        })
    }
    searchByText=(e)=>{
        this.setState({
            curr_Text:e.target.value
        })

        let data=JSON.parse(localStorage.getItem('movies'||'[]'))
        let temp=[]
        let temp_title=''
        if(this.state.curr_Text!==''){
            temp=data.filter((mov)=>{
                temp_title=mov.original_title.toLowerCase()
                return temp_title.includes(e.target.value.toLowerCase())
            })
        }
        else{
            temp=this.state.movies;
        }
        this.setState({
            movies:[...temp],
        })
    }

    sortPopularity=()=>{
        let temp=this.state.movies
        temp.sort((a,b)=>{
            return a.popularity-b.popularity
        })
        this.setState({
            movies:[...temp]
        })
    }
    sortPopularityReverse=()=>{
        let temp=this.state.movies
        temp.sort((a,b)=>{
            return b.popularity-a.popularity
        })
        this.setState({
            movies:[...temp]
        })
    }
    sortRating=()=>{
        let temp=this.state.movies
        temp.sort((a,b)=>{
            return a.vote_average-b.vote_average
        })
        this.setState({
            movies:[...temp]
        })
    }
    sortRatingReverse=()=>{
        let temp=this.state.movies
        temp.sort((a,b)=>{
            return b.vote_average-a.vote_average
        })
        this.setState({
            movies:[...temp]
        })
    }


    render() {
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
            27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

        return (
            <div>
                <>
                    <div className='main'>
                        <div className='row'>
                            <div className='col-3' style={{padding:'2rem'}}>
                                <ul className="list-group">
                                    {

                                        this.state.genres.map((value) => (
                                            value===this.state.curr_genre?
                                                <li className="list-group-item" style={{fontWeight:"bold",background:'#017BFE',color:'white'}}>{value}</li>:
                                                <li className="list-group-item" style={{fontWeight:"bold",background:'white',color:'#017BFE'}} onClick={()=>this.changeGenre(value)}>{value}</li>
                                        ))

                                    }

                                </ul>
                            </div>
                            <div className='col-9 favourites-table' >
                                <div className='row' style={{padding:'2rem'}}>
                                    <input type='text' className='input-group-text col' placeholder="Search" value={this.state.curr_Text} onChange={this.searchByText}/>
                                </div>
                                <div className="row" style={{padding:'2rem'}}>
                                    <table className="table table-bordered table-dark table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col"><i className="fa-solid fa-caret-up" onClick={this.sortPopularity}/>Popularity<i className="fa-solid fa-caret-up fa-rotate-180" onClick={this.sortPopularityReverse}/></th>
                                            <th scope="col"><i className="fa-solid fa-caret-up" onClick={this.sortRating}/>Rating<i className="fa-solid fa-caret-up fa-rotate-180" onClick={this.sortRatingReverse}/></th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.movies.map((value)=>(
                                                <tr>

                                                    <td><img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt={value.title} style={{width:'5rem'}}/> {value.original_title}</td>
                                                    <td>{genreids[value.genre_ids[0]]}</td>
                                                    <td>{value.popularity}</td>
                                                    <td>{value.vote_average}</td>
                                                    <td><button type="button" className="btn btn-danger" onClick={()=>this.deleteFav(value)}>Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </>
            </div>
        );
    }
}

export default Favourites;