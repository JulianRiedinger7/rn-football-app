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
				'CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, thumbnail TEXT NOT NULL, short_description TEXT NOT NULL, platform TEXT NOT NULL, genre TEXT NOT NULL, release_date TEXT NOT NULL, developer TEXT NOT NULL, game_url TEXT NOT NULL);',
				[],
				() => resolve(),
				(_, err) => reject(err)
			)
		})
	})
	return promise
}

export const insertFavorite = (
	title,
	thumbnail,
	short_description,
	platform,
	genre,
	release_date,
	developer,
	game_url
) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO favorites (title, thumbnail, short_description, platform, genre, release_date, developer, game_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
				[
					title,
					thumbnail,
					short_description,
					platform,
					genre,
					release_date,
					developer,
					game_url,
				],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			)
		})
	})
	return promise
}

export const removeFavorite = (title) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'DELETE FROM favorites WHERE title = ?;',
				[title],
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
