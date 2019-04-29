import React, { Component } from 'react';

class displayData extends Component { 
    componentWillReceiveProps = (props) => {
        props.data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
    deleteId = (id) => {
        this.props.deleteData(id);
    } 
    render() {
        const { data } = this.props;
        return (
            <div className="h2 my-5 row">
                { data.length <= 0
                    ? <div className="text-center w-100">No data present in database.</div>
                    : data.map((eachdata, index) => (
                        <div className="col-6 my-3 d-flex justify-content-between" key={index}>
                            <h4 className="text-left">
                                <span className="text-secondary"> Id: </span> {eachdata.id} <br />
                                <span className="text-secondary"> Data: </span> {eachdata.message}
                            </h4>
                            <button className="h5 btn btn-warning" onClick={() => this.deleteId(eachdata.id) }>Delete</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default displayData;