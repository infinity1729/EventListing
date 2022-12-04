# Event Lister(Repo: `EventListing`)

## 👋 Introducing EventListing

`EventListing` is a web-app to keep track of events. It sorts all upcoming events according to time and date and displays description about the event. The main target 
audience for this project are college students for whom it becomes very difficult to manage various events organized by different clubs and associations across their campus.   

## 🏗️ How to Set up `EventListing` for Development?

Here is a quick overview of the `EventListing` repo setup:

### 🍴 Fork and Clone the Repo 
First, you need to fork the `EventListing` repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

Once forked, you can clone the repo by clicking the `Clone or Download` button on the top right corner of the forked repo.

Please change the directory after cloning the repository using the `cd <folder-name>` command.

>**Note:** Please do not remove the `.env.development` file from the root folder. It contains all the evironment variables required for development.

### ⬇️ Install backend requirements

```bash
pip install pipenv
```
```bash
pipenv shell
```
```bash
pipenv install
```

### ⬇️ Install frontend dependencies

```bash
cd frontend
```
```bash
npm install
```
```bash
npm audit
```

### ⬇️ Migrate backend models

```bash
cd ..
```
```bash
cd backend
```
```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

### ⬇️ Create super user

```bash
python manage.py createsuperuser
```

### ⬇️ Run django server

```bash
python manage.py runserver
```

### ⬇️ Run frontend

open new terminal in `frontend` directory and run this command
```bash
npm start
```

### Localhost links

