import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function Header()
{
    return(
        <div>
            <header> 

                <nav class="navbar navbar-light bg-light justify-content-between">
                    <div className="container">
                        < Link class="navbar-brand" to='/'><i class="fa fa-leaf cl p-2 rounded" aria-hidden="true"></i></Link>
                    <form class="form-inline">
                            <input class="form-control input-edit form-bor" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-warning my-2 my-sm-0 serach-btn" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    </div>
                </nav>
               
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
                    <div className="container">
                        < Link class="navbar-brand" to='/'><i class="fa fa-home" aria-hidden="true"></i> ProShop</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                    <a class="nav-link" href="#"><i class="fas fa-sign-in-alt"></i> Log In</a>
                            </li>
                            <li class="nav-item active">
                                    <a class="nav-link" href="#"><i class="fas fa-money-bill"></i> Predict A Price</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                                <a class=" my-2 my-sm-0 text-white" ><i class="fa fa-shopping-cart" href="#"></i> Cart <span class="badge badge-secondary"> 5</span></a>
                        </form>
                    </div>
                </div>
                </nav>
                


            </header>
        </div>
    )
}
 export default Header;