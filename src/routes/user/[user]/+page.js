import { error } from '@sveltejs/kit';
import getUser from '$lib/users';

export async function load({ params }) {
	const user = getUser(params.user);
    if (!user) {
        error(404, 'User not found');
    }
	return user;
}
