import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createAppStore } from "@/store";
import ProjectTabs from "@/components/ProjectTabs.vue";

function mountTabs(lang = "fr") {
  const store = createAppStore();
  store.state.lang = lang;
  const wrapper = mount(ProjectTabs, { global: { plugins: [store] } });
  return { store, wrapper };
}

describe("ProjectTabs", () => {
  it("shows the three categories in the current language, Professional selected", () => {
    const { wrapper } = mountTabs("fr");
    const tabs = wrapper.findAll('[role="tab"]');

    expect(tabs.map((t) => t.text())).toEqual(["Professionnel", "Universitaire", "Personnel"]);
    expect(tabs.map((t) => t.attributes("aria-selected"))).toEqual(["true", "false", "false"]);
  });

  it("uses English labels when the site is in English", () => {
    const { wrapper } = mountTabs("en");
    expect(wrapper.findAll('[role="tab"]').map((t) => t.text())).toEqual([
      "Professional",
      "Academic",
      "Personal",
    ]);
  });

  it("filters the projects when a tab is clicked", async () => {
    const { store, wrapper } = mountTabs("en");
    const personal = wrapper.findAll('[role="tab"]')[2];

    await personal.trigger("click");

    expect(store.state.projectFilter).toBe("personal");
    expect(personal.attributes("aria-selected")).toBe("true");
  });

  it("shows a light-hearted note only on the academic tab", async () => {
    const { wrapper } = mountTabs("fr");
    const tabs = wrapper.findAll('[role="tab"]');
    expect(wrapper.find(".tab-note").exists()).toBe(false);

    await tabs[1].trigger("click");
    expect(wrapper.find(".tab-note").text()).toContain("voyage dans le temps");

    await tabs[2].trigger("click");
    expect(wrapper.find(".tab-note").exists()).toBe(false);
  });

  it("translates the academic note", async () => {
    const { wrapper } = mountTabs("en");
    await wrapper.findAll('[role="tab"]')[1].trigger("click");
    expect(wrapper.find(".tab-note").text()).toContain("time travel");
  });

  it("moves between tabs with the arrow keys", async () => {
    const { store, wrapper } = mountTabs("en");
    const tabs = wrapper.findAll('[role="tab"]');

    await tabs[0].trigger("keydown", { key: "ArrowRight" });
    expect(store.state.projectFilter).toBe("academic");

    await tabs[1].trigger("keydown", { key: "ArrowLeft" });
    await tabs[0].trigger("keydown", { key: "ArrowLeft" });
    expect(store.state.projectFilter).toBe("personal");
  });
});
