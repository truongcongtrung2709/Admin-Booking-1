import { fetcher } from './fetcher'

export const authAPI = {
    signIn: (user) => {
        return fetcher.post('/auth/signin', user);
    },
   
}