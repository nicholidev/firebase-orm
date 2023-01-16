<h1 align="center">Firebase ORM</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/firebase-orm">
        <img src="https://img.shields.io/npm/dm/firebase-orm.svg?style=flat-square" alt="NPM downloads">
    </a>
    <a href="https://www.npmjs.com/package/firebase-orm">
        <img src="https://img.shields.io/npm/v/firebase-orm.svg?style=flat-square" alt="NPM version">
    </a>
    <a href="/LICENSE">
        <img src="https://img.shields.io/npm/l/firebase-orm.svg?style=flat-square" alt="License">
    </a>
    <a href="https://nicholijin.com/">
        <img src="https://img.shields.io/badge/maintained%20with-Nicholi-cc00ff.svg?style=flat-square" alt="Maintained with Nicholi">
    </a>
</p>

## How to install
```
npm i firebase-orm --save
```
or
```
yarn add firebase-orm
```

## How to use

### find query

example:
```js
import { firebaseStore, FILTER_OPR, SORT } from "firebase-orm";

const getProducts = functions.https.onRequest(async (req, res) => {
    const data = await firebaseStore.find(
        collection, // const collection = firestore.collection("products")
        [
            {
                key: "xxxx",
                opr: FILTER_OPR.EQUAL, // or simply text "==" | "<" | "<=" | ">" | ">=" | "!=" | "array-contains" | "array-contains-any" | "in" | "not-in"
                val: "xxxxxx"
            },
            {
                key: "price",
                opr: FILTER_OPR.LESS_EQUAL,
                val: 123
            },
            //...
        ], // FILTERs default is []
        [
            {
                key: "name",
                value: SORT.ASC // or simply "asc", "desc", "-1", "1" or you may not define default will be "asc".
            },
            //...
        ], // SORTs default is []
        {
            limit: 10, // default is -1 and it will return max 
            page: 1 // default is -1 and it will start from first item
        }
    )
})
```
