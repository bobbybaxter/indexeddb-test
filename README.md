# IndexedDb Test

based off of this [this blog post](https://blog.jimdhughes.com/indexeddb-react/) by James Hughes

## Purpose
I needed a starting off point and sandbox for implementing [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for client-side data storage in a project.

## What does this app do?
- when a database hasn't been created, it creates an IndexedDb database, creates an object store within that database, then seeds the object store.

- creates a class with some simple CRUD functions

- creates a home component and service order components to see the seeded data in more detail

## How to run
- clone the repo
- at the root of the project, run `yarn`
- run `yarn start`