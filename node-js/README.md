# Lessons Learned 

## What NodeJS?
- It is a platform that uses the V8 Engine (Google Chrome) allowing to use JavaScript on the backend so it is possible to perform requests and act on responses in the server-side.

## What is Express?
- Express is a "micro-framework" that can help creating and handling routes and views.

## What is Nodemon?
- Automatically refreshes the server every time the code is changed and saved.
- The best way to use nodemon is to create a custom script in the 'package.json' file.

```json
    {
        "scripts": {
            "dev": "nodemon server.js"
        }
    }
```

- To run the script above, move to your project's root folder and enter `npm run dev`.
- `run` is used when you are running custom created scripts.

## What is Docker?
- Docker is a software that allows to containerize resourcers or softwares.
- Instead of installing the required software (e.g.: SQL Server, MongoDB) on your host machine, you can do it through a container which is a Virtual Machine that will hold your software's image.

### Downloading Docker
- If you have Windows 10 Professional or Enterprise you can download "Docker Desktop" from Docker's wesbite.
- Another option is to use a package manager (e.g.: Chocolatey) and download the "Docker Toolbox".

#### Installing Docker Toolbox through Chocolatey
- [Download](https://chocolatey.org/packages/docker-toolbox)

    `choco install docker-toolbox`

- I had difficulties trying to use the Docker Toolbox without having previously installed Kitematic - Docker GUI.
    - You can also use it run Docker through the Windows Powershell
- It is also important that you have Oracle VirtualBox installed!

    `choco install docker-toolbox -ia /COMPONENTS="kitematic,virtualbox"`

#### Installing MongoDB
1 - Donwload MongoDB's image from the Docker's library.

    `docker pull mongo`

2 - Running a container instance containing MongoDB

    `docker run --name <container_name> -p <host_port>:<vm_port> -d <image_name>`

3 - Check what images are currently running

    `docker ps` or `docker ps -a`

4 - Starting up a container - when it's not running!

    `docker start <container_name>`

## What is Mongoose?
- Mongoose is an ORM for non-relational databases.
- It will encapsulate operations used in a database through JavaScript code.
    - Therefore, instead of queries you only need to use JavaScript code so you can perform operations like SELECT, DELETE, INSERT, etc.

## What is CORS?
- 