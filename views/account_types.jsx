const React = require('react');
const Main = require('./layout/main');

const AccountTypes = ({account_types}) => {
    return(
        <Main>
            <h2 className="mb-4">Account types</h2>

            <div className="card">
                <div className="card-body">
                    <h3 className="mt-3">Add an account type</h3>
                    <form action="/account_types" method="POST">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input name="name" type="text" className="form-control" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input name="description" type="text" className="form-control" id="description"/>
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
                                <th>Name</th>
                                <th>Description</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {account_types.map(account_type => {
                                return(
                                    <tr key={account_type.id}>
                                        <td>{account_type.id}</td>
                                        <td>{account_type.name}</td>
                                        <td>{account_type.description}</td>
                                        <td>
                                        <a 
                                        href={`/account_types/delete/${account_type.id}`} 
                                        className="btn btn-danger mx-1">
                                            Delete
                                        </a>
                                        <a 
                                        href={`/account_types/update/${account_type.id}`} 
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
module.exports = AccountTypes;