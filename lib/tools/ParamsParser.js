export default function paramsParse(slugs) {
    const array = slugs.map(el => {
        return el.split('=');
    })
    const entries = new Map(array);
    return Object.fromEntries(entries);
}