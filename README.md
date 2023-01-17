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

Usage:
```js
import fireOrm from "firebase-orm";
import * as admin from "firebase-admin";

admin.initializeApp();
const firestore = admin.firestore();

const getProducts = functions.https.onRequest(async (req, res) => {
    const collection = firestore.collection("products");    
    
    const data = await fireOrm.find(
        collection, // const collection = firestore.collection("products")
        {
            productType: "sales",
            salesPosition: "us"
        }, // FILTER refer filter types
        {
            id: "asc"    
        }, // SORTs refer sort types
        {
            limit: 10, // default is -1 and it will return max 
            page: 1 // default is -1 and it will start from first item
        }
    )
})
```
