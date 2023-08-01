# Vite Docker HMR issue

This is a sample repo to demonstrate issues whilst trying to handle HMR on a vite development server.

out of the box, testing and developing with vite works fine, HMR works fast and no issues. As soon as we move to a docker container issues start to arise. It seems that [chokidar](https://github.com/paulmillr/chokidar), which is used for watching files, does not work reliably when we run in docker whilst mounting a volume. Therefore "usePolling" must be used. The main issue comes when activating usePolling in the vite.config.ts file. The interval does not matter in how fast the hmr watch process kicks off. It takes several seconds for changes to persist. They are though available immediately to the docker container.

## Requirements

- MacOS Ventura: 13.4
- Docker version 24.0.5
- (I'm using colima): colima version 0.5.5
- Docker Compose version 2.20.2

## Setup

```sh
docker compose up
```
Note: If you start a terminal into the container you can watch the contents of a file with the watch command:
```sh
watch -n 0.4 -d cat ./src/App.tsx
```
This will allow you to see if changes are reflected immediately into the file, but as a side effect the HMR process will kick off (for that single file) with an interval that matches the watch process. (Unsure why this is working yet).