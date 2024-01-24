import reactImg from '../assets/react-core-concepts.png';
import "./Header.css"
const ReactDescription = ['Fundamental', 'Core', 'Crucial'];

function genRandom(arr){
    const index = Math.floor(Math.random() * arr.length);
    return ReactDescription[index];    
}

const write = genRandom(ReactDescription);

export default function Header() {
    return (
        <div>
            <header>
                <img src={reactImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {write} React concepts you will need for almost any app you are going to build!
                </p>
            </header>
        </div>
    );
}