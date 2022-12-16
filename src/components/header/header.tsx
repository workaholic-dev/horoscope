import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const today = new Date();
  const dateFromParams = new Date(loc.params.date);

  const left = new Date(dateFromParams);
  left.setDate(dateFromParams.getDate() - 1);

  const right = new Date(dateFromParams);
  right.setDate(dateFromParams.getDate() + 1);

  const showRight = right <= today;

  return (
    <header>
        {/* TODO: SVG */}
        <Link href={`/${left.toLocaleDateString('sv')}`}>Left</Link>

        <span>{loc.params.date}</span>

        {/* TODO: SVG */}
        {
          showRight ? 
            <Link href={`/${right.toLocaleDateString('sv')}`}>Right</Link>
          :
            null
        }
    </header>
  );
});
