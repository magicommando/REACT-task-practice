import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './components/Welcome'
import UserCard from './components/UserCard'
import UserCard2 from './components/UserCard2'
function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    
   <div style={styles.page}> 
   <div style={styles.card}> 
      
         

      
        <h1 style={styles.title}>Monkey counter</h1>
        <p style={styles.subtitle}>Bananas collected: {count}</p>

        <div style={styles.buttonRow}>
  <button style={styles.btnPrimary} onClick={decrease}>- Decrease</button>
  <button style={styles.btnTertiary} onClick={() => setCount(0)}>Reset</button>
  <button style={styles.btnSecondary} onClick={increase}>+ Increase</button>
</div>
  
        
        
        <hr style={styles.divider} />
        
      
    
      <Welcome />
      
      <UserCard 
        name="Corbin"
        email="magi696king@gmail.com"
        age={34}
        location="New Mexico"
        occupation="Carpenter"
        hobbies="Shooting, 3d Printing, Gaming"
      />

      <UserCard2 
        subject="React"
        ID="12345"
      />

    
    </div>
    
    </div>
  );
  }
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:"url('/src/assets/Jungle-background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    
    
  },
  
  card: {
  alignItems: "center",
  justifyContent: "center",
  margin: "20px",
  backgroundColor: "rgba(43, 75, 58, 0.9)",
  color: "#fdf7e3",
  padding: "32px",
  borderRadius: "8px",
  border: "4px solid #ffd54a",
  boxShadow: "0 0 0 4px #3b2b10",
},


  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "40px",
    marginBottom: "24px",
  },

  subtitle: {
    fontSize: "16px",
    marginBottom: "24px",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "24px",
  },

  btnPrimary: {
    flex: 1,
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(90deg, #ebeb42, #ffa500)",
    fontWeight: "600",

  },
  btnSecondary: {
    flex: 1,
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(90deg, #ebeb42, #ffa500)",
    color: "#ebeb42",
    fontWeight: "600",
  },
  btnTertiary: {
    flex: 1,
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(90deg, #ebeb42, #ffa500)",
    color: "#ebeb42",
    fontWeight: "600",

  },
  divider: {
    border: "none",
    borderTop: "3px solid rgba(4, 4, 3, 0.25)",
    margin: "24px 0",
  },
};
export default App 
