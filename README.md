This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## API

### POST
```bash
curl --location --request POST 'http://localhost:3000/api/people/create' \
--header 'Content-Type: application/json' \
--data-raw '{
     "name": "Owen",
      "height": "76" ,
      "mass": 195, 
      "hair_color": "black", 
      "skin_color": "white", 
      "eye_color": "brown", 
      "gender": "male"
}'
```

### GET

```bash
curl --location --request GET 'http://localhost:3000/api/people/'
```

Accessed at: `http://localhost:3000/`

### SHOW
```
curl --location --request GET 'http://localhost:3000/api/people/<id>'
```

Accessed at: `http://localhost:3000/person/<id>`

## PRISMA

### Requirements
- need a local postgres database
```bash
postgres-> CREATE DATABASE mydatabase;
```

- create a .env file at root of project
```env
DATABASE_URL="postgres://user@localhost/mydatabase"
```

### Setting Up Prisma Connection

```bash
npx prisma db push
```

### Migrate
```bash
npx prisma migrate --name name_of_migration
```
### Seed the DB
```bash
npx prisma db seed
```

### Prisma GUI
```bash
npx prisma studio
```

## Resources
- https://vercel.com/guides/nextjs-prisma-postgres
- https://www.prisma.io/nextjs
