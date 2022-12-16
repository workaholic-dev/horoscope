import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './list-item.css?inline';

interface ListItemProps {
  sign: string;
  signDates: string;
  dailySummary: string;
}

export const ListItem = component$((props: ListItemProps) => {
  const {sign, signDates, dailySummary} = props;
  useStylesScoped$(styles);
  const store = useStore({isOpen: false});

  return (
    <div key={sign} class="list-item">
      <div class="list-item-header" onClick$={() => store.isOpen = !store.isOpen}>
        <span>signIcon</span>
        <span>{sign}</span>
        <span>{signDates}</span>
      </div>

      {
        store.isOpen ? 
          <div class="list-item-content">
            <p>{dailySummary}</p>
          </div>
        :
          null
      }
    </div>
  )
});
