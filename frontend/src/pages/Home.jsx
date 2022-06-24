import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class ToDoList extends Component {
  //get gpu data to frontend 
  state = {
    gpus: [],
    loading: true,
    error: null
  }

  componentDidMount() {
    axios
      .get('https://localhost:5000/api/gpus')
      .then(response => {
        this.setState({
          gpus: response.data,
          loading: false
        })
      }
      )
      .catch(error => {
        this.setState({
          error,
          loading: false
        })
      }
      )
    }

  render() {
    const { gpus, loading, error } = this.state
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>Error: {error.message}</div>
    }
    return (
      <Fragment>
        <div className="container"/>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">To Do List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <th>GPU Model</th>
                      <th>GPU Type</th>
                    </thead>
                    <tbody>
                      {gpus.map(gpu => (
                        <tr key={gpu.id}>
                          <td>{gpu.model}</td>
                          <td>{gpu.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
    }

}
