import { beforeEach, describe, expect, it } from "vitest";
import { createAppStore } from "@/store";

const titles = (projects) => projects.map((p) => p.en.title);

describe("project categories", () => {
  let store;
  beforeEach(() => {
    store = createAppStore();
  });

  it("gives every project one of the three categories", () => {
    for (const p of store.state.projects) {
      expect(["pro", "academic", "personal"]).toContain(p.category);
    }
  });

  it("shows professional projects by default", () => {
    expect(store.state.projectFilter).toBe("pro");
    expect(titles(store.getters.filteredProjects)).toEqual([
      "Pilot",
      "Milo Kiné",
      "Thalie Kaé",
      "Vigie Réseau",
      "Starter kit",
      "Jourune",
    ]);
  });

  it.each([
    ["Pilot", "https://pilot-doc.netlify.app/"],
    ["Thalie Kaé", "https://thaliekae.fr/"],
    ["Milo Kiné", "https://www.milo-kine.fr/"],
    ["Vigie Réseau", "https://www.data-newroad.com/solutions/vigie-reseau/"],
  ])("links the %s card to %s", (title, link) => {
    const project = store.state.projects.find((p) => p.en.title === title);
    expect(project.link).toBe(link);
    expect(project.deadLink).toBe(false);
  });

  it("has no APRR & B2PWeb card", () => {
    expect(titles(store.state.projects)).not.toContain("APRR & B2PWeb");
  });

  it("gives every project a unique id", () => {
    const ids = store.state.projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("filters academic projects", () => {
    store.commit("setProjectFilter", "academic");
    expect(titles(store.getters.filteredProjects)).toEqual([
      "ET'YVA",
      "Okydoky",
      "Lost Color",
      "Fractal terrain generation",
    ]);
  });

  it("filters personal projects", () => {
    store.commit("setProjectFilter", "personal");
    expect(titles(store.getters.filteredProjects)).toEqual([
      "RPG Manager",
      "Dev Compass",
      "Burst Your Bubble",
      "Palettes previews",
    ]);
  });
});
