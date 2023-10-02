import React, {Component} from 'react';

class Favourites extends Component {

    constructor() {
        super();
        this.state={
            genres:[],
            curr_genre:'All Genres',
            movies:[]
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
            movies:[...data]
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
        this.setState({
            genres:[...temp_genre],
            movies:[...temp_mov]
        })
        localStorage.setItem('movies',JSON.stringify(temp_mov))


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
                                    <input type='text' className='input-group-text col' placeholder="Search"/>
                                    <input type='number' className='input-group-text col' placeholder="Rows Count"/>
                                </div>
                                <div className="row" style={{padding:'2rem'}}>
                                    <table className="table table-bordered table-dark table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">Popularity</th>
                                            <th scope="col">Rating</th>
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
                                <div className="row" style={{paddingLeft:'2rem'}}>
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
                        </div>

                    </div>
                </>
            </div>
        );
    }
}

export default Favourites;