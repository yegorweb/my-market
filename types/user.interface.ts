export interface User {
	_id: string
	name: string
	email: string
	password: string
	avatar_url?: string
	date: number
	roles: string[]
}
