import * as Types from "../actionTypes/authActionTypes";
import fire from "../../config/firebase";

const loginUser = (payload) =>{
    return{
        type: Types.SIGN_IN ,
        payload
    };
};

const logOutUser = () =>{
    return{
        type: Types.SIGN_OUT,
    };
};

export const signInUser =(email,password,setSuccess) => (dispatch) => {
    //console.log(email,password);
    fire.auth().signInWithEmailAndPassword(email,password).then((user)=>{
        //console.log(user);
        dispatch(loginUser({uid: user.user.uid, email: user.user.email, name: user.user.displayName}))
        setSuccess(true);
    }).catch((error)=>{
        console.log(error);
        alert("Invalid Email or Password!");
    });
};

export const signUpUser =(name,email,password,setSuccess) => (dispatch) => {
    //console.log(name,email,password);
    fire.auth().createUserWithEmailAndPassword(email, password).then((user) =>{
        fire.auth().currentUser.updateProfile({
            displayName: name,
        }).then(()=>{
            const currentUser= fire.auth().currentUser;
            //console.log(currentUser.user);
            dispatch(loginUser({uid: currentUser.uid, name: currentUser.displayName, email: currentUser.email}));
            setSuccess(true);
        }).catch((error)=>{
            console.log(error);
        });
    }).catch((error) => {
        if(error.code==="auth/email-already-in-use"){
            alert("Email already in use!");
        }
        if(error.code==="auth/invalid-email"){
            alert("Invalid email!");
        }
        if(error.code==="auth/weak-password"){
            alert("Weak password!");
        }
        console.log(error);
    });
};

export const signOutUser =() => (dispatch) => {
    dispatch(logOutUser());
};
export const checkIsLoggedIn =() => (dispatch) => {
    fire.auth().onAuthStateChanged(user =>{
        if(user){
            dispatch(loginUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            })
        );
        }
    });
};