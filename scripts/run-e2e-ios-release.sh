#!/bin/bash

yarn start &

METRO_BUNDLER_PID=$!

npx detox clean-framework-cache && npx detox build-framework-cache

yarn test:e2e-ios-dev-debug

DETOX_EXIT_CODE=$?

kill $METRO_BUNDLER_PID

exit $DETOX_EXIT_CODE