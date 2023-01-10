import { collection, getDocs } from "firebase/firestore"; 
import { database } from "./init";

type Props = {
    db: string
    query: {
        where?: {key: string},
    },
}


const find = async (props: Props) => {
    const { query, db } = props

    const querySnapshot = await getDocs(collection(database, db));

    return querySnapshot.forEach(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
}

const findOne = async (props: Props) => {
    const { query, db } = props

}

export {
    find,
    findOne
}