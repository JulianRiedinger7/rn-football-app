import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('favorites.db')

export const clean = async () => {
	try {
		db.transaction(async (tx) => {
			tx.executeSql(
				'SELECT name FROM sqlite_master WHERE type="table"',
				[],
				async (_, { rows }) => {
					const tableNames = rows._array.map(({ name }) => name)
					for (let i = 0; i < tableNames.length; i++) {
						tx.executeSql(`DROP TABLE ${tableNames[i]}`)
					}
				}
			)
		})
	} catch (error) {
		throw error
	}
}
export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, game TEXT NOT NULL);',
				[],
				() => resolve(),
				(_, err) => reject(err)
			)
		})
	})
	return promise
}

export const insertFavorite = (game) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO favorites (game) VALUES (?);',
				[JSON.stringify(game)],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			)
		})
	})
	return promise
}

export const removeFavorite = (game) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'DELETE FROM favorites WHERE game = ?;',
				[JSON.stringify(game)],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			)
		})
	})
	return promise
}

export const getFavorites = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM favorites',
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			)
		})
	})

	return promise
}
