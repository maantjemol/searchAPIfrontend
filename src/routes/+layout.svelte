<script lang="ts">
  import "../app.css";
  let { children } = $props();
  import { browser } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import posthog from "posthog-js";

  if (browser) {
    beforeNavigate(() => posthog.capture("$pageleave"));
    afterNavigate(() => posthog.capture("$pageview"));
  }
</script>

{@render children()}
