export const textClamp = (text, limit, cut) => {
    if (text.length > limit) {
        return text.slice(0, cut) + '...'
    }
    return text
}