module.exports = {
    env: {
        DB_USER: 'postgres',
        DB_PASS: 'root',
        DB_HOST: 'localhost',
        DB_PORT: '5432',
        DB_NAME: 'forum_db',

        SESSION_PASSWORD: 'strong-pass-ever',
        SESSION_COOKIE: 'forum/auth',

        // NODE_ENV: 'dev' || 'production',

        NEXT_PUBLIC_APP_HOSTNAME: 'localhost:3000'
    }
}