###1. Copy env (update if needed).
cp .env.example .env

###2. Install dependencies
npm install

###3. Run docker with db
docker-compose up -d

###4. Run server
npm run dev

