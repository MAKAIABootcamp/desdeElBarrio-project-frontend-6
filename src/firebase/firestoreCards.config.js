import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { firestore } from "./firebase.config";

//Crea un array con la informacion de las cards, en caso de que no este creada la coleccion, se crea automaticamente
//Si ya esta creada, solo agrega el nuevo documento con su informacion
export const createCollections = async (title, date, type, imageUrl) => {
    try {
        let collectionName = '';
        if (type === 'evento') {
            collectionName = 'Events';
        } else if (type === 'noticia') {
            collectionName = 'News';
        } else if (type === 'taller') {
            collectionName = 'Workshops';
        }

        const collectionRef = collection(firestore, collectionName);
        await addDoc(collectionRef, {
            title: title,
            date: date,
            imageUrl: imageUrl, 
        });

        console.log("Documento agregado correctamente a la colección", collectionName);
    } catch (error) {
        console.error("Error al agregar documento a la colección", collectionName, ":", error);
    }
};


// Trae la informacion de la base de datos 

export const getEvents = async () => {
  const eventsCollectionRef = collection(firestore, 'Events');
  const eventsSnapshot = await getDocs(eventsCollectionRef);
  return eventsSnapshot.docs.map(doc => doc.data());
};

export const getWorkshops = async () => {
  const workshopsCollectionRef = collection(firestore, 'Workshops');
  const workshopsSnapshot = await getDocs(workshopsCollectionRef);
  return workshopsSnapshot.docs.map(doc => doc.data());
};

export const getNews = async () => {
  const newsCollectionRef = collection(firestore, 'News');
  const newsSnapshot = await getDocs(newsCollectionRef);
  return newsSnapshot.docs.map(doc => doc.data());
};

//Lea los cambios en Firebase en tiempo real
export const listenToEvents = (updateCallback) => {
  const eventsCollectionRef = collection(firestore, "Events");
  return onSnapshot(eventsCollectionRef, (snapshot) => {
    const events = [];
    snapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    updateCallback(events);
  });
};

export const listenToNews = (updateCallback) => {
  const eventsCollectionRef = collection(firestore, "News");
  return onSnapshot(eventsCollectionRef, (snapshot) => {
    const news = [];
    snapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    updateCallback(news);
  });
};

export const listenToWorkshops = (updateCallback) => {
    const eventsCollectionRef = collection(firestore, "Workshops");
    return onSnapshot(eventsCollectionRef, (snapshot) => {
      const workshops = [];
      snapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      updateCallback(workshops);
    });
};