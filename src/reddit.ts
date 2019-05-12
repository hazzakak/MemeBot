import * as snoowrap from 'snoowrap';
import { getConfig } from './config';

const r = new snoowrap({
    userAgent: getConfig().reddit.userAgent,
    clientId: getConfig().reddit.clientId,
    clientSecret: getConfig().reddit.clientSecret,
    refreshToken: getConfig().reddit.refreshToken
});

export async function getScore(submid: string) {
    return r.getSubmission(submid).score;
}

export function getSubmission(submid: string) {
    return r.getSubmission(submid);
}