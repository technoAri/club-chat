import Link from 'next/link'

const Form = ({ isLogin, errorMessage, onSubmit, isResetPassword }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Email</span>
      <input type="text" name="email" required />
    </label>
    {!isLogin && !isResetPassword && (
      <label>
      <span>Username</span>
      <input type="text" name="username" required />
    </label>
    )}
    <label>
      <span>Password</span>
      <input type="password" name="password" required />
    </label>
    {!isLogin && (
      <label>
        <span>Repeat password</span>
        <input type="password" name="rpassword" required />
      </label>
    )}

    <div className="submit">
      {isLogin && !isResetPassword && (
          <>
            <Link href="/signup">
              <a>I don't have an account</a>
            </Link>
            <button type="submit">Login</button>
          </>
        )}

        {!isLogin && !isResetPassword && (
          <>
            <Link href="/login">
              <a>I already have an account</a>
            </Link>
          <button type="submit">Signup</button>
          </>
        )}

        {!isLogin && isResetPassword && (
          <>
          <Link href="/login">
              <a>Go to Login</a>
          </Link>
          <button type="submit">Reset Password</button>
          </>
        )}

      {/* {isLogin ? (
        <>
          <Link href="/signup">
            <a>I don't have an account</a>
          </Link>
          <button type="submit">Login</button>
        </>
      ) : (      
        <>
          <Link href="/login">
            <a>I already have an account</a>
          </Link>
          <button type="submit">Signup</button>
        </>
      )} */}
    </div>
    <div>
      {isLogin && (
        <>
          <Link href="/password_reset">
            <a className="forgot_password_txt">Forgot Password</a>
          </Link>
        </>
      )}
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
      .forgot_password_txt {
        color: red;
      }
    `}</style>
  </form>
)

export default Form
