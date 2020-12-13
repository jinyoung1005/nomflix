import React from 'react';
import { tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';
import { moviesApi } from '../../api';

export default class extends React.Component{
    constructor(props) {
        super(props);
        //위 props는 생성자 클래스
        const {
            location:{pathname}
        } = props;
        this.state={
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
        //이로써 클래스가 생성됨.
    }

    async componentDidMount(){
        const {
            match:{
                params: {id}
            },
            history: {push},
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){
            push("/");
        }
        let result = null;
        try {
            if(isMovie){
               ({data:result} = await moviesApi.movieDetail(parsedId));
            } else{
                ({data:result}= await tvApi.showDetail(parsedId));
            } 
            //console.log(result);
        }catch {
                this.setState({error:"Can't find anything."});
            }finally {
                this.setState({loading:false,result });
            }
        }

    render() {
        //console.log(this.props);
        const {result,error,loading} = this.state;
        console.log(result);
        return (
            <DetailPresenter 
            result={result}
            error={error}
            loading={loading}
        />
        );
    }
}