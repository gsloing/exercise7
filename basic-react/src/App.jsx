import './App.css'
import Hello from ".components/Hello";
import Greetings from "./components/Greetings";

const App = () => {
  const [title, setTitle] = useState ("Welcome");
  const [isClicked, setIsClicked] = useState(false);
  const [students, setStudents] = useState([]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (isCLicked) {
      setTitle("Selamat Datang");
    } else {
      setTitle("Welcome");
    }
  
    console.log(title);
  };
  return (
    <div>
    {/*comment di jsx */}
    <h1>{title}</h1>
      <Hello />
      <Greetings />
      <button onClick={handleClick}>Click Me</button>
   </div>
  );
};

export default App