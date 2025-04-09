import { browser } from "$app/environment";
import { onMount } from "svelte";
import { afterNavigate, beforeNavigate } from "$app/navigation";
import posthog from "posthog-js";

if (browser) {
  posthog.init("phc_5JMMsERZmP6HGOwVHQJQrWc2P9pbedCZ7Askoq0fLN5", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    capture_pageview: false,
    capture_pageleave: false,
  });
}
