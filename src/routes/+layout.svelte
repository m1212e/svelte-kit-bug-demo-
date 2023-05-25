<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.postcss';
	import '../global.css';
	import 'iconify-icon';
	import { setLocale } from 'src/i18n/i18n-svelte';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<slot />
