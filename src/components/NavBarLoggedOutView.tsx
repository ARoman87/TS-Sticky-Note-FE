import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedOutView = ({ onSignUpClicked, onLoginClicked }: NavBarLoggedOutViewProps) => {
    return (
        <>
            <Button className="bg-dark border-0" onClick={onSignUpClicked}>Sign Up</Button>
            <Button className="bg-dark border-0" onClick={onLoginClicked}>Log In</Button>
        </>
    );
}

export default NavBarLoggedOutView;