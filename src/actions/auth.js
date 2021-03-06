import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}