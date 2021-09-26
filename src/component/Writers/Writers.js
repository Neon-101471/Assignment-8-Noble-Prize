import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Writers.css';
const Writers = (props) => {
    // destruture all key which are included in writer property
    const { name, birth, region, totalNoble, bestNoble, firstNoble, value, profile, fb, twitter, ln } = props.writer;
    return (
        <article className="col">
            <div className="card h-100 shadow-sm">
                <div className='py-2 writer-profile'>
                    <img src={profile} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <div className="card-text">
                        <p><b>Birth Year :</b> {birth}</p>
                        <p><b>Region :</b> {region}</p>
                        <p><b>Total Noble :</b> {totalNoble}</p>
                        <p><b>Best Noble:</b> {bestNoble}</p>
                        <p><b>First Noble :</b> {firstNoble}</p>
                        <p><b>Value :</b> {value}</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={() => props.handleToCart(props.writer)} className='btn btn-warning text-danger'> <FontAwesomeIcon icon={faCartPlus} /> Add To List</button>
                    </div>
                </div>
                <div className='d-flex justify-content-between social-icon pt-3 px-4'>
                    <p><a href={twitter}><i className="fab fa-twitter-square tw"></i></a></p>
                    <p><a href={ln}><i className="fab fa-linkedin ln"></i></a></p>
                    <p><a href={fb}><i className="fab fa-facebook-square fb"></i></a></p>
                </div>
            </div>
        </article>
    );
};

export default Writers;