import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './app.css';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}
//trigger the action, dispatch into reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
            // searchfield: ''
        }
    }
    componentDidMount() {
        // console.log(this.props.store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });

    }

    //this of event is in input so in order to use this of App we are using => function
    // onSearchChange = (event) => {
    //     // console.log(event.target.value);
    //     //connecting searchfield to event
    //     this.setState({ searchfield: event.target.value });
    // }
    render() {
        const {robots}=this.state;
        const {searchField,onSearchChange}=this.props;
        const filteredRobots = robots.filter(robot => {
            // this.state.searchfield.setState(event.target.value);
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <h1>Loading....</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2' >
                        Robofriends
                    </h1>
                    <SearchBox searchChange={onSearchChange} />
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

//connect is higher order function that return another function
export default connect(mapStateToProps, mapDispatchToProps)(App);
