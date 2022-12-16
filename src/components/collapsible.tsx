import { component$, Slot, useStore } from "@builder.io/qwik";

export const Collapsible = component$(() => {
  const store = useStore({ isOpen: true });

  return (
    <div class="collapsible">
      <div class="title" onClick$={() => (store.isOpen = !store.isOpen)}>
        <Slot name="title"></Slot>
      </div>
      {store.isOpen ? <Slot /> : null}
    </div>
  );
});
