import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean } from './api/HelloWorldApi'
import { useAuth } from './Security/AuthContext'

export default function WelcomeComponent(){
    const {username} = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        //Axios framework is used to call REST API
        retrieveHelloWorldBean('SaiKiran', authContext.token)
        .then( (response) => successfulResponse(response) )
        .catch( (error) => errorResponse(errorResponse) )
    }

    function successfulResponse(response){
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}