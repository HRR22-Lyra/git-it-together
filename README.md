# Git it Together
Consolidate the tools you need to implement agile scrum on existing GitHub repositories.

## Table of Contents
1. [Usage](#Usage)
    1. [Adding Repositories](#Adding-Repositories)
    1. [Adding and Removing Deliverables or Resources](#Adding-and-Removing-Deliverables-or-Resources)
    1. [Deleting User Projects](#Deleting-User-Projects)
    1. [Utilizing Live Chat](#Utilizing-Live-Chat)
    1. [Using Live Video Chat](#Using-Live-Video-Chat)
1. [Installation](#Installation)
1. [Database and GitHub API](#Database and GitHub API)
  1. [Database Schema](#Database-Schema)
  1. [GitHub API](#GitHub API)
1. [Team](#Team)

## Usage
### Adding Repositories
Search your GitHub repos and add them using the drop-down list. Once added, your repos will be accessible from your profile. Note that if your repo is forked from a parent, the parent repo will be used as the source for the project. This allows you to collaborate with other users who forked the same repo.
### Adding and Removing Deliverables or Resources
Fill out the form entirely and then submit, the lists will automatically update when you or anyone else adds/deletes deliverables/resources. To delete an item press the X that is located next to it.
### Deleting User Projects
Click the trash icon to the right of the project name in the project view. This removes the project from your list, but does not delete the project itself. If you delete a project by mistake, you can always re-add it in the project view.
### Utilizing Live Chat
Simply enter a message into the chat input and hit enter. Your message will be emitted to all other users in the same project and saved to the database. Your messages will persist even after you leave the project.
### Using Live Video Chat
Each project comes equipped with a dynamically created Appear.in room. Simply click "enter room" to join your teammates in a live chat.

## Installation
Fork and clone the respository to your local machine.
Use `npm install` to install the required dependencies.
To start the app you can use:
```
npm run build
npm start
```
or `npm run quick` which builds then runs.

## Database and GitHub API
### Database Schema
Project
  id: INTEGER
  owner: STRING
  get_repo: STRING
  name: STRING
  description: STRING

Resource
  id: INTEGER
  project_id: INTEGER (foreign key from Project)
  user: STRING
  name: STRING
  link: STRING

Deliverable
  id: INTEGER
  project_id: INTEGER (foreign key from Project)
  owner: STRING
  task: STRING
  status: STRING
  due_date: STRING
  progress: STRING
  points: INTEGER

UserProjects
  id: INTEGER
  user: STRING
  project_id: INTEGER (foreign key from Project)

Message
  id: INTEGER
  user: STRING
  text: STRING
  room: STRING

### GitHub API
Git It Together uses the GitHub API to obtain information about repositories. For more infomation see the [GitHub Developer Guide](https://developer.github.com/v3/)

## Team
- __Product Owner__: [James Mitchell](https://github.com/Jimmy6strings)
- __Scrum Master__: [Meg Viar](https://github.com/lmegviar)
- __Development Team Members__: [Kyle Anson](https://github.com/Riski24), [Simon de Moor](https://github.com/sdemoor), [Jordan Stubblefield](https://github.com/JStubb7939)
