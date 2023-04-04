#!/usr/bin/env bash

# Exit on fail
set -e

# Install packagist
npm install

# Start serve
npm start

# Finally call command issued to the docker service
exec "$@"
