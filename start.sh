#!/bin/bash

if [ "$APP_NAME_ENV" = "polskidevbackend" ]; then
  echo "Running in the production environment... [ polskidevbackend ]"
  exec yarn run polskidevbackendprod
if [ "$APP_NAME_ENV" = "telbookbackend" ]; then
  echo "Running in the production environment... [ telbookbackend ]"
  exec yarn run telbookbackendprod
fi
