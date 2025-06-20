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

---

Features :

- ✅ Formulaire de signIn
- ✅ Formulaire de signUp

- Authentification
    - ✅ Redirection automatique vers la page de login
    - ❌ Protection des routes API
    - ❌ Protection d'une page

- Menu navigation
    - ✅ Vers la liste de notes
    - ✅ Vers les paramètres de son compte
    - ✅ Vers les types de contenu
    - ✅ Déconnexion

- Gestion des types de contenu
    - ❌ Créer un type de contenu
    - ❌ Modifier un type de contenu
    - ❌ Lister les types de contenu
    - ❌ Supprimer un type de contenu

- Gestion des paramètres du compte
    - ❌ Modification du nom d'affichage
    - ❌ Visualisation du nom d'utilisateur
    - ❌ Modification du mot de passe

- Liste de notes
    - ❌ Voir toutes les notes (si il a accès en lecture)
    - ❌ Supprimer une note (si il en est propriétaire)
    - ❌ Ouvrir une note (si il a accès en lecture)
    - ❌ Renommer une note (si il est propriétaire)
    - ❌ Ouvrir la modale de création de note
    - ❌ Recherche par contenu / titre
    - ❌ Personnalisation de l'ordre d'affichage de notes

- Modal de création de note
    - ❌ Choix du nom
    - ❌ Choix du type de contenu
    - ❌ il en devient propriétaire à la création

- Détails d'une note
    - ❌ Éditer le contenu (si il a accès en écriture)
    - ❌ Sauvegarder le contenu (si il a accès en écriture)
    - ❌ Supprimer la note (si il est propriétaire)
    - ❌ Renommer la note (si il est propriétaire)
    - ❌ Insérer un widget (si il a accès en écriture)
    - ❌ Partager une note (lecture ou écriture ou partage si il a accès au partage)
    - ❌ Mettre une note en public (si il est propriétaire)

- Widget


- Gestion des droits
    - L'inscription est publique
    - Chaque utilisateur peut
        - voir les notes dont il est propriétaire
        - voir les notes publiques
        - voir les notes partagées avec lui