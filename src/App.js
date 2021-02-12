import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./profile/profile";
import snakePhoto from "./profile/SnakePhoto.jpg";

export const handleName = (name) =>
    alert(
        "my name is    " +
            name +
            "    remove props to know the real identity(see default props)"
    );

function App() {
    return (
        <div>
            <Profile
                fullName="Pikachu"
                bio="Just a pokemon"
                profession="ملكة في بيت زوجي"
                afficher={handleName}
            >
                <img src={snakePhoto} alt=""></img>
            </Profile>
        </div>
    );
}

export default App;
