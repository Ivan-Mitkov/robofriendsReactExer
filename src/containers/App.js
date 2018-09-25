import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './app.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });

    }

    //this of event is in input so in order to use this of App we are using => function
    onSearchChange = (event) => {
        // console.log(event.target.value);
        //connecting searchfield to event
        this.setState({ searchfield: event.target.value });
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            // this.state.searchfield.setState(event.target.value);
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <h1>Loading....</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2' >
                        Robofriends
                    </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

    }

}

export default App;
