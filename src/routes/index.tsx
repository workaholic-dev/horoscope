import { component$ } from '@builder.io/qwik';
import { DocumentHead, RequestHandler } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    </>
  );
});

export const onGet: RequestHandler = async ({ response }) => {
  throw response.redirect(`/${new Date().toLocaleDateString('sv')}`);
};

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
