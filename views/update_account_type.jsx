const React = require('react');
const Main = require('./layout/main');

const UpdateAccountType = ({account_type}) => {
    return(
        <Main>
            <h2>Update {account_type.name}</h2>
            <div className="card">
                <div className="card-body">
                <form action={`/account_types/update/${account_type.id}`} method="POST">
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="first_name" className="form-label">Name</label>
                                <input 
                                name="name" 
                                type="text" 
                                className="form-control" 
                                id="first_name" 
                                defaultValue={account_type.name}/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="last_name" className="form-label">Description</label>
                                <input 
                                name="description" 
                                type="text" 
                                className="form-control" 
                                id="last_name"
                                defaultValue={account_type.description}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <a href="/account_types" type="button" className="btn btn-secondary mx-1">Come Back</a>
                    </form>
                </div>
            </div>
        </Main>
    )
}
module.exports=UpdateAccountType;