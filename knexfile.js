const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

const {
  DB_DRIVE,
  DB_CLIENT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_TEST_DRIVE,
  DB_TEST_CLIENT,
  DB_TEST_USER,
  DB_TEST_PASSWORD,
  DB_TEST_HOST,
  DB_TEST_PORT,
  DB_TEST_NAME
} = process.env

module.exports = {
  test: {
    client: DB_TEST_DRIVE,
    connection: `${DB_TEST_CLIENT}://${DB_TEST_USER}:${DB_TEST_PASSWORD}@${DB_TEST_HOST}:${DB_TEST_PORT}/${DB_TEST_NAME}`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: DB_DRIVE,
    connection: `${DB_CLIENT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};