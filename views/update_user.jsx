const React = require('react');
const Main = require('./layout/main');

const UpdateUser = ({user}) => {
    return(
        <Main>
            <h2>Update {user.first_name}</h2>
            <div className="card">
                <div className="card-body">
                <form action={`/users/update/${user.id}`} method="POST">
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input 
                                name="first_name" 
                                type="text" 
                                className="form-control" 
                                id="first_name" 
                                defaultValue={user.first_name}/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input 
                                name="last_name" 
                                type="text" 
                                className="form-control" 
                                id="last_name"
                                defaultValue={user.last_name}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="telephone" className="form-label">Telephone</label>
                                <input 
                                name="telephone" 
                                type="text" 
                                className="form-control" 
                                id="telephone"
                                defaultValue={user.telephone}/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input 
                                name="email" 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                defaultValue={user.email}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <a href="/users" type="button" className="btn btn-secondary mx-1">Come Back</a>
                    </form>
                </div>
            </div>
        </Main>
    )
}
module.exports=UpdateUser;