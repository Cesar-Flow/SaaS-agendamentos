#!/bin/sh

echo "Running migrations..."
npm run migrate

echo "Running seeders..."
npm run seed:all

echo "Starting server..."
npm run dev
