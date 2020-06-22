import React,{useEffect,useState} from 'react'


const Home = () => {
    
    const [ring,setRing] = useState([])
    const [logs,setsLogs] = useState(false)

    useEffect (() =>{
      fetch('https://jsonplaceholder.typicode.com/posts/',{
          method: 'GET',
          headers: {'Content-type':'application/json'}
      })
      .then(res=> res.json(res))
      .then(data =>{
          setRing(ring => data )
      })
    },[])
     
    const logging =() =>{
        if(logs){
            return(
                <div className='container bg-dark text-light my-2 pt-2 pb-2'>
                {
                    ring.map(sets=>(
                        <div className='alert alert-light mx-auto my-2 '>
                            {sets.id}<br/>
                            {sets.title}<br/>
                            {sets.body}
                        </div>   
                    ))
                }
        
            </div>
               )
        }
     
    }

    const log = ()=>{
        setsLogs( logs => true)
    }

    return (
        <div>
            <button class='btn btn-success' onClick={log}>
               See the logs
             </button>   
          
           <div style={{paddingTop:'50px',paddingBottom:'50px'}}>
                 {
                     logging()
                 }
           </div>

           
        </div>
    )
}

export default Home;
