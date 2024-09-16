// User profiles
// For the sake of simplicity, please avoid similar names so it can be fetched using a simple find() and match() method
const users = [
	{
		username: 'John Peterson',
		interests: []
	}
];

/**
 * Find a match if the string exactly matches any usernames.
 *
 * The code converts the string to lowercase before matching to remove case sensitivity.
 *
 * @param {string} name The name of the user
 * @returns {object}    The user object
 *
 * @example const user = getUser('john');
 *
 * @author The Legendary John
 */

function getUser(name) {
	const lowercaseName = name.toLowerCase();
	const data = users.find((user) => user.username.toLowerCase() === lowercaseName);
	console.log(data);

	return data;
}

export default getUser;
