import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';
function ListUsers() {

    const[tableUsers,setTableUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setTableUsers(res.data))
        .catch(err => console.log(err))
    },[]);

    
/**
 * Meme truc sauf que c'est avec fetch
 * !!! !!! !!! !!! !!! !!! !!! !!! !!!
 * 
 * const[tableUsers2,setTableUsers2] = useState([])
 * useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => setTableUsers2(res.data))
        .catch(err => console.log(err))
    },[]);
 */
    

    return (
        <div>
            <h1>Listes de users 1</h1>
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">identifiant</th>
      <th scope="col">nom complet</th>
      <th scope="col">username</th>
      <th scope="col">Email</th>
      <th scope="col">Ville</th>
      <th scope="col">Téléphone</th>
      <th scope="col">Site web</th>
      <th scope="col">Compagnie</th>
    </tr>
  </thead>
  <tbody>
    {
        tableUsers.map(
            (data, i) => (
                <tr key={i}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.address.city}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                <td>{data.company.name}</td>
              </tr>
            )
        )

    }
  </tbody>
</table>
        </div>
    );
}

export default ListUsers;