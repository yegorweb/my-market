import { User } from "~/types/user.interface"

export default defineNuxtPlugin(async (nuxtApp) => {
	// Skip plugin when rendering error page
	if (nuxtApp.payload.error) {
		return {}
	}

	const { data: user, refresh } = await useApiFetch<User>('/api/auth/refresh')

	const redirectTo = useState("authRedirect")

	addRouteMiddleware(
		"auth",
		(to) => {
			if (to.meta.auth && !user.value) {
				redirectTo.value = to.path
				return "/login"
			}
		},
		{ global: true }
	)

	const currentRoute = useRoute()

	if (process.client) {
		watch(user, async (loggedIn) => {
			if (!loggedIn && currentRoute.meta.auth) {
				redirectTo.value = currentRoute.path
				await navigateTo("/login")
			}
		})
	}

	if (user.value && currentRoute.path === "/login") {
		await navigateTo(redirectTo.value || "/")
	}

	return {
		provide: {
			auth: {
				user,
				redirectTo,
				refresh,
			}
		}
	}
})