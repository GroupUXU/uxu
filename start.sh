#!/bin/bash

if [ "$APP_NAME_ENV" = "polskidevbackend" ]; then
  echo "Running in the production environment... [ polskidevbackend ]"
  exec yarn run polskidevbackendprod
fi
