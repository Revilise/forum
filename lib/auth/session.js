const { SESSION_PASSWORD, SESSION_COOKIE, NODE_ENV } = process.env;

export const sessionOptions = {
    password: SESSION_PASSWORD,
    cookieName: SESSION_COOKIE,
    cookieOptions: {
        secure: NODE_ENV === 'production'
    }
}