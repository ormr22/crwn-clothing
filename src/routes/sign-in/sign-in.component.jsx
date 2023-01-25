import {
  signInWIthGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.jsx';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWIthGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;