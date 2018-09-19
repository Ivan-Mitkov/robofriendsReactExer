import React,{Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    //this of event is in input so in order to use this of App we are using => function
    onSearchChange=(event)=>{
        // console.log(event.target.value);
        //connecting searchfield to event
        this.setState({searchfield:event.target.value});   
    }
    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            // this.state.searchfield.setState(event.target.value);
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>
                    Robofriends
                </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Cardlist robots={filteredRobots} />
            </div>
    
        );
    }
    
}

export default App;
