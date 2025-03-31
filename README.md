# Getting Started

- Start the project     ->  `docker compose --file ./dev/docker-compose-dev.yaml up`
- Inside the container  ->  `npm run migration:run`
- Inside the container  ->  `npm run seed`
- Go to                 ->  `http://localhost:3333`
- Signin page           ->  `http://localhost:3333/api/auth/signin`

# API Examples

- To query *ONE* user by it's id    -> `http://localhost:3333/api/user/1`
- To query *ALL* users              -> `http://localhost:3333/api/user`

# Technical Stack

- Docker    ->  A compose is available with node:20 and postgres
- Next JS   ->  The main framework
- Type ORM  ->  The database ORM
- NextAuth  ->  The authentification provider
- Vitest    ->  The test framework
- Mantine   ->  The UI library

# Scripts

- `npm run dev`         ->  Starts the development environment
- `npm run seed`        ->  Seeds the database with default data
- `migration:create`    ->  Creates an empty migration
- `migration:generate`  ->  Creates a migration based from changes made in entities
- `migration:run`       ->  Runs the migrations that have not yet been run
- `npm run lint`        ->  Run ESLint
