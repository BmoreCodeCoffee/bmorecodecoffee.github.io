import HomeView from './HomeView.vue';
import { describe, beforeEach, afterEach, it} from "vitest";
import {cleanup, render, screen} from "@testing-library/vue";

describe("Home view component", () => {
    beforeEach(() => {
        render(HomeView);
    });

    afterEach(() => {
        cleanup();
    });

    it("contains a link to the meet up", () => {
        // Should throw an error if we don't have the link to the slack
        screen.getByRole("link", {name: "Meet Up"});
    });

    it("contains a link to the baltimore tech slack", () => {
        // Should throw an error if we don't have the link to the slack
        screen.getByRole("link", {name: "Baltimore Tech Slack"});
    });
})