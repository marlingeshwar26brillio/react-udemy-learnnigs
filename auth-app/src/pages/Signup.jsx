import { useState } from "react"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div style={styles.container}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

const styles = {
  container: { textAlign: "center", marginTop: "80px" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px",
    margin: "auto"
  }
}

export default Signup