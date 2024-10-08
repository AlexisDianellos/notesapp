import { Button } from "react-bootstrap";

interface NavBarLoggedInViewProps {
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
}

const NavBarLoggedOutView = ({
  onSignUpClicked,
  onLoginClicked,
}: NavBarLoggedInViewProps) => {
  return (
    <>
      <Button onClick={onSignUpClicked}>Sign up</Button>
      <Button onClick={onLoginClicked}>Log in</Button>
    </>
  );
};

export default NavBarLoggedOutView;
