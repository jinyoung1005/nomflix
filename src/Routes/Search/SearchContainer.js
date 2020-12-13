import React from 'react';
import { moviesApi } from '../../api';
import { tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component{
    state={
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false,
        // 디폴트로 아무것도 로딩하지 않기 때문에 로딩은 false
    };
    
    handleSubmit = () => {//handleSubmit은 누군가 폼에서 text입력하고 엔터누르면 그게 handleSubmit이됨.
        const {searchTerm} = this.state;        
        if(searchTerm !== ""){
            this.serachByTerm();
        }
    }

    serachByTerm = async() => {
        const {searchTerm} = this.state;     
        this.setState({loading:true});   
        try{
            const {data: {results:movieResults}
        } = await moviesApi.search(searchTerm);
            const {data: {results:tvResults}
        } = await tvApi.search(searchTerm); 
        this.setState({
            movieResults,
            tvResults,
        });
        }catch{
            this.setState({error: "Can't find results."});
        }finally{
            this.setState({loading:false});
        }
    }

    render() {
        const {movieResults,tvResults,searchTerm,error,loading} = this.state;
        console.log(this.state);
        return (
            <SearchPresenter 
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
        />
        );
    }
}