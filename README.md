**Tech and Tools**
1. Frontend and Backend - Next.js
2. Express - Auxiliary backends (Bank webhook)
3. Turborepo
4. Postgres Database
5. Prisma ORM
6. Tailwind
7. Docker
8. CI/CD

**CONCEPTS**
1. State management using Recoil
2. Authentication using next-auth
3. On-ramping (adding money to wallet) through a webhook
4. Transactions in Postgres
5. Locking rows for transaction

---

- Clone the repo
- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
