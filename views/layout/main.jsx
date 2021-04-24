const React = require('react');

function Main(props){
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"></link>
            <title>Bank</title>
        </head>
        <body>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="#">Bank</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/users">Users</a>
                        <a className="nav-link" href="/account_types">Account types</a>
                    </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                {props.children}
            </div>
        </body>
        </html>
    )
}
module.exports = Main;