import React, { Fragment } from 'react' 
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import first from '../img/1.png'
import sec from '../img/2.png'
import third from '../img/3.jpg'

const Home = () => {
    return (
        <Fragment>

            <div class="card ">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Answers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Media</a>
                    </li>
                    </ul>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <BellIcon className="bell-icon"/> Post
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <img src={first} alt="First" className="img1"/>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <BellIcon className="bell-icon"/> Post
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <img src={sec} alt="First" className="img1"/>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <BellIcon className="bell-icon"/> Post
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <img src={third} alt="First" className="img1"/>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination center">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>

        </Fragment>
    )
}

export default Home