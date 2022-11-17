export const sessionOptions = {
    password: process.env.SESSION_PASSWORD,
    cookieName: process.env.SESSION_COOKIE,
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
}