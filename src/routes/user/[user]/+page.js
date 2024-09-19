import { error } from '@sveltejs/kit';
import userFuncs from '$lib/users';

export async function load({ params }) {
	const user = userFuncs.getUser(params.user);
    if (!user) {
        error(404, 'User not found');
    }
	return user;
}
