import React from 'react';
import style from '../Login/Login.module.css';

const Login = () => {


  return (
    <section>
      <div className={style.init}>
        <div className={style.value}>
          <div className={style.form}> 
            <form action="">
            <h2 className={style.text}>Login</h2>
    
            <div className={style.inputbox}>
              <ion-icon name="mail-outline"></ion-icon>
              <input className={style.inputbox2} type="email" required ></input>
              <label className={style.label} for="">Email</label>
            </div>

            <div className={style.inputbox}>
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input className={style.inputbox2} type="password" required></input>
              <label className={style.label} for="">Password</label>
            </div>

            <div className={style.forget}>
              <label for=""><input type="checkbox"/>Remenber Me  <a className={style.a} href='#'>Forget Password</a></label>
            </div>

            <button className={style.button}>Log in</button>

            <div className={style.register}>
              <p>Don`t have a account <a href='/registration'>Register</a></p>
            </div>

            </form>
          </div>
        </div>
      </div>
    </section>  
  )
};

export default Login;