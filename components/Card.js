// 'use client'
import React from 'react'
import  styles from './Card.css'
// import { useEffect } from 'react';

const Card = async(props) => {

  const {avatar_url,username,name,public_repos, public_gists, created_at}=props;
  let inimga;

  return (
    <div className="profile-card">
    <div className="card-header">
      <div className="pic">
        <img src={avatar_url} alt=""/>
      </div>
      <div className="name">{name}</div>
      <div className="desc">Git Username-{username}</div>
      <div className="descdate">Account Created-{created_at.slice(0,10)}</div>
      
      <a href={`https://github.com/${username}`} target='_blank' className="contact-btn">View on Github</a>
    </div>
    <div className="card-footer">
      <div className="numbers">
        <div className="item">
          <span>{public_repos}</span>
          public_repos
        </div>
        <div className="border"></div>
        <div className="item">
          <span>{public_gists}</span>
          public_gists
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Card