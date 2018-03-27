import axios from 'axios';
import * as userService from './user';

export const getUsers = (string) => {
    const id = userService.authHeader()._id;
    const str = string ? string : null;
    return axios.post('/api/users', JSON.stringify({ str, id }));
}
