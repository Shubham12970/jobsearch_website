
export default function LoginForm(props){
    return (
<div className="wrapper">

<div className="title-text">
    <div className="title login p-3">Login Form</div>
  </div>
    <div className="form-container">
        <div className="form-inner">
            <form action='/api/login' className="login" method='POST'>
            
                <div className="field">
                  <input id="username" name="username" type="text" placeholder="Username/Email Address" required />
                </div>
                <div className="field">
                  <input  id="password" name="password" type="password" placeholder="Password" required />
                </div>
                <div className="relative">
                                    <p className="text-sm text-red-400">{props.msg}</p>
                                </div>
                <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                </div>
                <div className="signup-link">Not a member? <a href="/signup" >Signup now</a></div>
            </form>
        </div>
    </div>
      
     <style jsx>{`
             .wrapper {
              overflow: hidden;
              max-width: 390px;
              background: #fff;
              padding: 30px;
              border-radius: 15px;
              box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
            }
            .wrapper .title-text {
              display: flex;
              width: 200%;
              color: white;
            }
            .wrapper .title {
              width: 50%;
              font-size: 35px;
              font-weight: 600;
              text-align: center;
              transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
              background: -webkit-linear-gradient(
                right,
                #003366,
                #004080,
                #0059b3,
                #0073e6
              );
              border-radius: 15px; 
            }
            
            .wrapper .form-container {
              width: 100%;
              overflow: hidden;
            }
            .form-container .form-inner {
              display: flex;
              width: 200%;
            }
            .form-container .form-inner form {
              width: 50%;
              transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            .form-inner form .field {
              height: 50px;
              width: 100%;
              margin-top: 20px;
            }
            .form-inner form .field input {
              height: 100%;
              width: 100%;
              outline: none;
              padding-left: 15px;
              border-radius: 15px;
              border: 1px solid lightgrey;
              border-bottom-width: 2px;
              font-size: 17px;
              transition: all 0.3s ease;
            }
            .form-inner form .field input:focus {
              border-color: #1a75ff;
              /* box-shadow: inset 0 0 3px #fb6aae; */
            }
            .form-inner form .field input::placeholder {
              color: #999;
              transition: all 0.3s ease;
            }
            form .field input:focus::placeholder {
              color: #1a75ff;
            }
            .form-inner form .pass-link {
              margin-top: 5px;
            }
            .form-inner form .signup-link {
              text-align: center;
              margin-top: 30px;
            }
            .form-inner form .pass-link a,
            .form-inner form .signup-link a {
              color: #1a75ff;
              text-decoration: none;
            }
            .form-inner form .pass-link a:hover,
            .form-inner form .signup-link a:hover {
              text-decoration: underline;
            }
            form .btn {
              height: 50px;
              width: 100%;
              border-radius: 15px;
              position: relative;
              overflow: hidden;
            }
            form .btn .btn-layer {
              height: 100%;
              width: 300%;
              position: absolute;
              left: -100%;
              background: -webkit-linear-gradient(
                right,
                #003366,
                #004080,
                #0059b3,
                #0073e6
              );
              border-radius: 15px;
              transition: all 0.4s ease;
            }
            form .btn:hover .btn-layer {
              left: 0;
            }
            form .btn input[type="submit"] {
              height: 100%;
              width: 100%;
              z-index: 1;
              position: relative;
              background: none;
              border: none;
              color: #fff;
              padding-left: 0;
              border-radius: 15px;
              font-size: 20px;
              font-weight: 500;
              cursor: pointer;
            }
            `}</style>
      
</div>
    )
}