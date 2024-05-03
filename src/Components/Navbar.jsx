import React from "react";

const Navbar = ({setCategory}) =>{
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand badge bg-light text-dark fs-5" href="#">JOHN'S NEWS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{
            setCategory("business")
          }}>BUSINESS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{
            setCategory("entertainment")
          }}>ENTERTAINMENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{
            setCategory("general")
          }}>GENERAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{
            setCategory("health")
          }}>HEALTH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{
            setCategory("science")
          }}>SCIENCE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{
            setCategory("sports")
          }}>SPORTS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;