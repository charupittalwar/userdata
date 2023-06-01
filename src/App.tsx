import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [title ,setTitle] = useState (' ')
  const usernameapi = () => {

   return new Promise <any> ((resolve, reject) =>{
     
    return setTimeout(()=>{

       resolve({name:'virat'});

    } , 1000);


  })

  };

  
   const getuserName= async()=>{

    console.log('test before');

   const userdata = await usernameapi ().catch((err) => {console.log ('err ' ,err)});

   console.log ('userdata ' , userdata);
   const {name } = userdata ;

   setTitle (name);

   console.log ('test after data')

   }

  
  useEffect(() => {
   
    getuserName();
   
  }, [])

////// user age


const [age ,setage] = useState (0)
const userage = () => {

 return new Promise <any> ((resolve, reject) =>{
   
  return setTimeout(()=>{

     resolve({age:35});

  } , 1000);


 })

};


 const getuserAge= async()=>{

  console.log('test before');

 const userdata1 = await userage ().catch((err) => {console.log ('err ' ,err)});

 console.log ('userdata ' , userdata1);
 const {age } = userdata1 ;

 setage(age);

 console.log ('test after data')

 }


useEffect(() => {
 
  getuserAge();
 
}, [])

////// user comp

   const [cmp , setCmp] = useState (' ')

  const userCmp = () =>{
   
    return new Promise <any> ((resolve ,reject) =>{

      return setTimeout (()=>{

       resolve ({cmp :"vigo"})


      }, 1000);



    })



  };
 const getusercmp  = async() =>{

  const userdata2 = await userCmp ().catch ((err) =>{console.log ("err " , err)})

  const {cmp} = userdata2;

  setCmp (cmp);


 }

 useEffect  (() => {

getusercmp ();

 } ,[])
  return (
    <div>User Data : <br></br>

    {title} <br></br>
    
    {age} <br></br>

    {cmp}


    </div>
  );
}

export default App;
