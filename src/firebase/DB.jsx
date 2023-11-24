import { FirebaseApp } from "./FirebaseApp";
import { getFirestore } from 'firebase/firestore';
FirebaseApp();

//Base de datos
const dataBase = getFirestore();

export function DB(){
    return dataBase;
}