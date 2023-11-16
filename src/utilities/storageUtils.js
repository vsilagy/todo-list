/**
 * Saves a key-value pair to localStorage
 * @param {string} key - The key under which to store the data
 * @param {Object} value - The data to be stored
 */
export function saveToLocalStorage(key, value) {
	try {
		const jsonValue = JSON.stringify(value);
		localStorage.setItem(key, jsonValue);
	} catch (error) {
		console.error('Error saving to localStorage', error);
	}
}

/**
 * Retrieves data from localStorage
 * @param {string} key - The key of the data to retrieve
 * @returns {Object|null} - The retrieved data or null
 */
export function getFromLocalStorage(key) {
	try {
		const jsonValue = localStorage.getItem(key);
		return jsonValue ? JSON.parse(jsonValue) : null;
	} catch (error) {
		console.error('Error retrieving from localStorage', error);
		return null;
	}
}

/**
 * Removes data from localStorage.
 * @param {string} key - The key of the data to remove.
 */
export function removeFromLocalStorage(key) {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.log('Error removing from localStorage', error);
	}
}

/**
 * Clears all data from localStorage.
 */
export function clearLocalStorage() {
	try {
		localStorage.clear();
	} catch (error) {
		console.error('Error clearing localStorage', error);
	}
}
