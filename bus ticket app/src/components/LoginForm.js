import React ,{useState} from 'react';


function LoginForm({Login,error,}) {

    // login ekranında aldığımız bilgileri burada gönderdik
    const [details,setDetails]=useState({name:"",password:""});
    const submitHandler =e => {
        e.preventDefault();
        Login(details);
    }
  
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Giriş Yap</h2>
                {(error!="" ? (<div className='error'> {error} </div> ) :"")}
                <div className='form-group'>
                <label htmlFor='name'> E posta </label>
                <input type="text" name='name' id='name' onChange={e=>setDetails({...details,name:e.target.value})} value={details.mail}></input>
                </div>
                <div className='form-group'>
                <label htmlFor='password'> Şifre</label>
                <input type="password" name='password' id='password' onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="LOGIN"></input>
                
            </div>
        </form>
    )
}

export default LoginForm;