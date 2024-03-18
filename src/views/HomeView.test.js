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
    
    it("contains a link to the Meet Up page", () => {
        // This will throw an error if the link with text "Meet Up page" is not found
        screen.getByRole("link", { name: /meet up page/i });
    });
    
    it("contains a link to the baltimore tech slack", () => {
        // Should throw an error if we don't have the link to the slack
        screen.getByRole("link", {name: "Baltimore Tech Slack"});
    });
})