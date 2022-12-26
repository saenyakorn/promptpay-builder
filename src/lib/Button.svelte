<script lang="ts">
	import clsx from 'clsx'
	import type { HTMLButtonAttributes } from 'svelte/elements'

	let className: string = ''
	export { className as class }

	interface $$Props extends HTMLButtonAttributes {
		class?: string
	}
</script>

<button
	{...$$restProps}
	class={clsx(
		'text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800',
		'font-bold',
		className
	)}><slot /></button
>
