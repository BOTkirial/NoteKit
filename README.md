# Notekit

Une application de prise de notes et de connaissance centralisée :

## Des Notes

En son coeur, NoteKit est une application web de prise de notes. à ce titre, elle propose de :

- D'éditer des notes avec un éditeur markdown WYSIWIG
- D'organiser ses notes selon un système de tag hiérarchisés
- D'effectuer une recherche au sein de ses notes

## Des Widgets

La fonctionnalité principale de NoteKit est l'incorporation de widget au sein des notes.
2 widgets sont proposés :
- Kanban
- Type de contenu personnalisé

Un type de contenu personnalisé permet d'incorporer une série de champs de formulaire au sein d'une note et de la catégoriser automatiquement.
Cela permet de rapidemment créer une sorte de base de données intégrée aux notes.

Les champs disponibles pour les contenus personnalisés :
- Relation vers une note
- Carte du monde
- Toggle
- Text

## collaboration

NoteKit est pensé pour être utilisé dans un foyer :
- Facilement selfhostable
- Un système d'authentification et d'autorisation robuste
- La possibilité de partager ou non des notes
- gestion des droits CRUD en note par note

## Technologies

- [Next](https://nextjs.org/)
- [TipTap](https://tiptap.dev/product/editor)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)


# Permissions system

NoteKit is designed from the ground up with a powerful system to manage access and permissions. If you ever worked with Microsoft's Dataverse, you will feel right at home.

## Users and Teams

In NoteKit, ownership of a Note can be given to either a User or a Team.
A Team is a group of any number of User.
Teams can be nested inside others as many times as needed.
Users can belong to any number of Teams.

## Actions

In NoteKit, creating, viewing, editing and deleting a Note is considered an Action.
Users can only perform an Action on a Note if they have the permission to do so.

There are also some special Actions like creating or editing a Role, or adding a Widget to a Note.

# Roles and Levels of Permissions

To determine if a User is authorized to perform a given Action, NoteKit will check his Level Of Permission against the owner of the Note.

There are X Levels Of Permissions :
- *Any* : The User will be able to perform the Action.
- *Any Team* : The User will be able to perform the Action, if he is part of any of the nested Team of the target Note's owner.
- *Own Team* : The User will be able to perform the Action if the User is part of the same Team as the target Note's owner.
- *User* : The User will be able to perform the Action if the User is the owner of the Note.
- *None* : The User will not be able to perform the Action.

Roles are used to set the Level of Permission of Users or Teams. 
When you create a Role, you assign the Level Of Permission of you want to each Action.
Then you are able to give that Role to either a Team or a User.  
Users inherit the roles of their Teams and all of their nested Teams.

# Development Environment

To start the project simply run the command : `docker compose --file ./dev/docker-compose-dev.yaml up` at the root of the project.
The project is available at `http://localhost:3000/`
Connection page is available at `http://localhost:3000/api/auth/signin`