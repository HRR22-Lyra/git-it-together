# Git it Together
Consolidate the tools you need to implement agile scrum on existing GitHub repositories.

## Table of Contents
1. [Usage](#Usage)
    1. [Login](#Login)
    1. [Adding Repositories](#Adding-Repositories)
    1. [Adding and Removing Deliverables or Resources](#Adding-and-Removing-Deliverables-or-Resources)
    1. [Deleting User Projects](#Deleting-User-Projects)
    1. [Utilizing Live Chat](#Utilizing-Live-Chat)
    1. [Using Video Chat](#Using-Video-Chat)
1. [Installation](#Installation)
1. [Database and GitHub API](#Database-and-GitHub-API)
  1. [Database Schema](#Database-Schema)
  1. [GitHub API](#GitHub-API)
1. [Ideas for Future Contributions](#Ideas-for-Future-Contributions)
1. [Team](#Team)

## Login
Login through Auth O using your GitHub account. If you create an account instead of using GitHub, you will not be able to access your repositories.
## Usage
### Adding Repositories
Search your GitHub repos and add them using the drop-down list. Once added, your repos will be accessible from your profile. Note that if your repo is forked from a parent, the parent repo will be used as the source for the project. This allows you to collaborate with other users who forked the same repo.
### Adding and Removing Deliverables or Resources
Fill out the form entirely and then submit, the lists will automatically update when you or anyone else adds/deletes deliverables/resources. To delete an item press the X that is located next to it.
### Deleting User Projects
Click the trash icon to the right of the project name in the project view. This removes it from your list, but does not delete the project itself. If you delete a project by mistake, you can always re-add it in the project list view.
### Utilizing Live Chat
Simply enter a message into the chat input bar and hit enter. Your message will be emitted to all other users in the same project and saved to the database. Your messages will persist even after you leave the project.
### Using Video Chat
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
Project [id (integer), owner (string), get_repo (string), name (string), description (string)]

Resource [id (integer), project_id (integer, foreign key from Project), user (string), name (string), link (string)]

Deliverable [id (integer), project_id (integer, foreign key from Project), owner (string), task (string), status (string), due_date (string), progress (string), points (integer)]

UserProjects [id (integer), user (string), project_id (integer, foreign key from Project)]

Message [id (integer), user (string), text (string), room (string)]

Note: owner and user fields should always be a GitHub handle

### GitHub API
Git It Together uses the GitHub API to obtain information about repositories. For more infomation see the [GitHub Developer Guide.](https://developer.github.com/v3/)

## Ideas for Future Contributions
- Display summaries and thumbnails of resources using [Open Graph](http://ogp.me/)
- Create a custom video chat module
- Integrate Git It Together with GitHub issues
- Add ability to change deliverable categories
- Make assign deliverables a dropdown of users connected to the project (currently a text input)
- Display users connected to a project
- Give repo owners admin access over projects, including adding and removing users

## Team
- __Product Owner__: [James Mitchell](https://github.com/Jimmy6strings)
- __Scrum Master__: [Meg Viar](https://github.com/lmegviar)
- __Development Team Members__: [Kyle Anson](https://github.com/Riski24), [Simon de Moor](https://github.com/sdemoor), [Jordan Stubblefield](https://github.com/JStubb7939)

## Screenshots


<img src="https://cloud.githubusercontent.com/assets/23217560/26078025/24890792-398c-11e7-813b-ac160e98e1bd.png" width="800"/>

<img src="https://cloud.githubusercontent.com/assets/23217560/26078040/35a11d8a-398c-11e7-8da7-2b642f1d1a57.png" width="800"/>

<img src="https://cloud.githubusercontent.com/assets/23217560/26078043/3788f582-398c-11e7-89bf-240dd8017b53.png" width="800"/>

<img src="https://cloud.githubusercontent.com/assets/23217560/26078047/38c3cf80-398c-11e7-8052-4b869e473e1b.png" width="800"/>

<img src="https://cloud.githubusercontent.com/assets/23217560/26078061/3f61e7fa-398c-11e7-88d9-efcb01798e6b.png" width="400"/>

<img src="https://cloud.githubusercontent.com/assets/23217560/26078063/40dfd60a-398c-11e7-95fb-f1af2f456163.png" width="400"/>
