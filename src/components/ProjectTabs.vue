<template>
    <div class="project-tabs">
        <div class="tabs" role="tablist" :aria-label="labels.label">
            <button
                v-for="(category, i) in categories"
                :key="category"
                ref="tab"
                type="button"
                role="tab"
                :id="'tab-' + category"
                aria-controls="projects-panel"
                :aria-selected="active === category"
                :tabindex="active === category ? 0 : -1"
                :class="{ active: active === category }"
                @click="select(category)"
                @keydown="onKeydown($event, i)"
            >
                {{ labels[category] }}
            </button>
        </div>
        <Transition name="note">
            <p v-if="active === 'academic'" class="tab-note" role="note">
                {{ labels.academicNote }}
            </p>
        </Transition>
    </div>
</template>
<script>
import { PROJECT_CATEGORIES } from "@/store";

export default {
    name: "ProjectTabs",
    data() {
        return { categories: PROJECT_CATEGORIES };
    },
    computed: {
        active() {
            return this.$store.state.projectFilter;
        },
        labels() {
            return this.$store.state.txt[this.$store.state.lang].categories;
        },
    },
    methods: {
        select(category) {
            this.$store.commit("setProjectFilter", category);
        },
        // Arrow keys move between tabs (wrapping), Home/End jump to the ends.
        onKeydown(event, index) {
            const last = this.categories.length - 1;
            const next = {
                ArrowRight: index === last ? 0 : index + 1,
                ArrowLeft: index === 0 ? last : index - 1,
                Home: 0,
                End: last,
            }[event.key];
            if (next === undefined) return;
            event.preventDefault();
            this.select(this.categories[next]);
            this.$refs.tab[next]?.focus();
        },
    },
};
</script>
<style lang="scss" scoped>
.project-tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

// Small aside under the tabs, shown on the academic tab only.
.tab-note {
    box-sizing: border-box;
    max-width: min(560px, calc(100% - 2rem));
    margin: 0 auto 0.5rem;
    padding: 0.75rem 1.1rem;
    @include glass(0.18);
    border-radius: $radius-md;
    color: $ink;
    font-size: 0.92rem;
    font-style: italic;
    line-height: 1.5;
}
.note-enter-active,
.note-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}
.note-enter-from,
.note-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

.tabs {
    display: inline-flex;
    gap: 4px;
    padding: 5px;
    margin: 2rem auto 1rem;
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
    @include glass(0.22);
    border-radius: $radius-pill;

    button {
        border: none;
        background: transparent;
        color: $ink;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.6rem 1.3rem;
        border-radius: $radius-pill;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 0.25s ease, color 0.25s ease;
        @include focus-ring;

        &:hover:not(.active) {
            background-color: rgba(255, 255, 255, 0.45);
        }
        &.active {
            background-color: $ink;
            color: $cream;
        }

        @include width-under(500px) {
            font-size: 0.85rem;
            padding: 0.55rem 0.8rem;
        }
    }
}
</style>
