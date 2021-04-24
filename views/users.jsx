const React = require('react');
const Main = require('./layout/main');

const Users = ({users}) => {
    return(
        <Main>
            <h2 className="mb-4">Users</h2>

            <div className="card">
                <div className="card-body">
                    <h3 className="mt-3">Add an user</h3>
                    <form action="/users" method="POST">
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input name="first_name" type="text" className="form-control" id="first_name"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input name="last_name" type="text" className="form-control" id="last_name"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="telephone" className="form-label">Telephone</label>
                                <input name="telephone" type="text" className="form-control" id="telephone"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Telephone</th>
                                <th>Email</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map(user => {
                                return(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.telephone}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <a 
                                            href={`/users/delete/${user.id}`} 
                                            className="btn btn-danger mx-1">
                                                Delete
                                            </a>
                                            <a 
                                            href={`/users/update/${user.id}`} 
                                            className="btn btn-warning mx-1">
                                                Update
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Main>
    )
}
module.exports = Users;