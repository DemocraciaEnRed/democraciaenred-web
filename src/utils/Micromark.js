import {micromark} from 'micromark'

export const Micromark = ( mdContent ) => {
    return micromark(mdContent)
}