import React, { Component } from 'react';

class Delete extends Component { 
    state = {
        data: [],
        id: '',
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

    // our delete method that uses our backend api 
    // to remove existing database information
    deleteFromDB = idTodelete => {
        const dbData = this.state.data;
        idTodelete = parseInt(idTodelete);
        if(dbData.filter(ele => ele.id === idTodelete).length > 0) {
            this.props.deleteData(idTodelete);
            this.setState({ id: '' });
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
                    placeholder="Id that need to be removed"
                    value={this.state.id}
                />
                <button className="btn btn-warning my-3 form-control" onClick={() => this.deleteFromDB(this.state.id)}>
                    Delete
                </button>
            </div>
        )
    }
}
export default Delete;