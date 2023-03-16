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
     "person_name": "Owen",
      "height": "6'\''00'\''" ,
      "mass": "190lbs", 
      "hair_color": "black", 
      "skin_color": "white", 
      "eye_color": "brown", 
      "gender": "male"
}'
```

## GET

```bash
curl --location --request GET 'http://localhost:3000/api/people/'
```

## SHOW
```
curl --location --request GET 'http://localhost:3000/api/people/1'
```