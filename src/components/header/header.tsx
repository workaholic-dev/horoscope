import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
        {/* TODO: SVG */}
        {/* TODO: Link to earlier date */}
        <Link href="/">Left</Link>

        {/* TODO: prop */}
        <span>2022-12-16</span>

        {/* TODO: SVG */}
        {/* TODO: Link to next date */}
        <Link href="/">Right</Link>
    </header>
  );
});
