import React, { Component } from "react";
import axios from "axios";
import DisplayData from '../layout/displaydata';
import Add from '../layout/addData';
import Delete from '../layout/deleteData'
import Put from '../layout/putData';

class HOC extends Component { 
    // our delete method that uses our backend api 
    // to remove existing database information
    deleteDb = idTodelete => {
        axios.delete("http://localhost:3001/api/deleteData", {
            data: {
            id: idTodelete
            }
        });
    };

    render() {
        const { data } = this.props;
        return (
            <div className="body-container text-center my-5 px-5">
                <h1>Storing of Data in Database </h1>
                <DisplayData data={ data } deleteData = { this.deleteDb }/>
                <Add data = { data }/>
                <Delete data = { data } deleteData = { this.deleteDb }/>
                <Put data = { data }/>
            </div>
        )
    }
}
export default HOC;