import React, { Component } from 'react';
import axios from "axios";

class Add extends Component { 
    state = {
        data: [],
        message: '',
        id: ''
    }

    componentWillReceiveProps = (props) => {
        this.setState({ data: props.data });
    }

    updateInputValue = (type) => (evt) => {
        const value = evt.target.value;
        var numberReg = /^[0-9]*$/gm;
        if (type === 'id' && !numberReg.test(value)) {
            return null;
        }
        this.setState({ [type]: value });
    }


    // our update method that uses our backend api
    // to overwrite existing data base information
    updateDB = (idToUpdate, updateToApply) => {
        const dbData = this.state.data;
        idToUpdate = parseInt(idToUpdate);
        if(dbData.filter(ele => ele.id === idToUpdate).length > 0) {
            axios.post("http://localhost:3001/api/updateData", {
                id: idToUpdate,
                update: { message: updateToApply }
            });
            this.setState({ id: '', message: '' });
        } else {
            alert("Invalid Id");
        }
    };

    render() {
        return (
            <div className="my-3">
                <input className="form-control"
                    type="text"
                    onChange={this.updateInputValue('id')}
                    placeholder="Id of item to update here"
                    value={this.state.id}
                />
                <input className="form-control mt-4 mb-3"
                    type="text"
                    onChange={this.updateInputValue('message')}
                    placeholder="Put new value of the item here"
                    value={this.state.message}
                />
                <button className="btn btn-warning form-control"
                    onClick={() =>
                        this.updateDB(this.state.id, this.state.message)
                    }
                >
                    UPDATE
                </button>
            </div>
        )
    }
}
export default Add;