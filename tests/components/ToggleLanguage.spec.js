import { afterEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import ToggleLanguage from "@/components/ToggleLanguage.vue";

function mountWithBrowserLang(browserLang) {
  vi.spyOn(navigator, "language", "get").mockReturnValue(browserLang);
  const store = createStore({ state: { lang: "en" } });
  mount(ToggleLanguage, { global: { plugins: [store] } });
  return store;
}

describe("ToggleLanguage", () => {
  afterEach(() => vi.restoreAllMocks());

  it("switches to French when the browser is in French", () => {
    expect(mountWithBrowserLang("fr-FR").state.lang).toBe("fr");
  });

  it("falls back to English for any other browser language", () => {
    expect(mountWithBrowserLang("de-DE").state.lang).toBe("en");
  });

  it("switches language when a button is clicked and marks it pressed", async () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("en-US");
    const store = createStore({ state: { lang: "en" } });
    const wrapper = mount(ToggleLanguage, { global: { plugins: [store] } });

    const fr = wrapper.findAll("button").find((b) => b.text() === "FR");
    await fr.trigger("click");

    expect(store.state.lang).toBe("fr");
    expect(fr.attributes("aria-pressed")).toBe("true");
  });
});
