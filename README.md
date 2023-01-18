## Getting Started

### First-Time Setup

If this is your first time using NodeJS, you'll need to install Yarn to use this project:

(You only need to do this once per system you develop on.)

```bash
npm install -g yarn
```

Then, we can clone the repository into a path of your choosing:

```bash
git clone https://github.com/Rethunk-Tech/nextjs-boilerplate.git project-name
cd project-name
```

Finally, install the dependencies using yarn.

```bash
cd project-name
yarn install
```

### Running the Dev Server

You can run the server locally with the following command:

```bash
yarn run dev -p 9000
```

### With Docker

Or, you can use Docker to run the server within containers:

1. Install [Docker Compose](https://docs.docker.com/compose/install/)

1. Enable [BuildKit for Docker](https://docs.docker.com/develop/develop-images/build_enhancements/#to-enable-buildkit-builds). (It's faster and has cache.)

1. "Up" the composition (specifying `--build` to force a re-build):

    ```bash
    docker-compose up --build
    ```

Open [http://localhost:9000/home](http://localhost:9000) with your browser to see the result.

#### Debugging

If you need to debug something inside the container, you can get a shell using:

```bash
docker-compose run --rm -u 0 nextjs sh
```
