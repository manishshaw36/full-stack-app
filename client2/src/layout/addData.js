import React, { Component } from 'react';
import axios from "axios";

class Add extends Component { 
    state = {
        data: [],
        message: '',
    }

    componentWillReceiveProps = (props) => {
        this.setState({ data: props.data });
    }

    updateInputValue = (type) => (evt) => {
        const value = evt.target.value;
        this.setState({ [type]: value });
    }
    
    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = message => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        axios.post("http://localhost:3001/api/putData", {
          id: idToBeAdded,
          message: message
        });
        this.setState({ message: '' });
    };

    render() {
        return (
            <div className="my-3">
                <input className="form-control"
                    type="text"
                    onChange={this.updateInputValue('message')}
                    placeholder="Add something in the database"
                    value={this.state.message}
                />
                <button className="btn btn-warning my-3 form-control" onClick={() => this.putDataToDB(this.state.message)}>
                    ADD
                </button>
            </div>
        )
    }
}
export default Add;