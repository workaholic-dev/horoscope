import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { ListItem } from '../list-item/list-item';
import styles from './list.css?inline';

export const List = component$(() => {
  useStylesScoped$(styles);

  const list = [
    {
      sign: 'Capricorn',
      signDates: 'Dec 22 - Jan 19',
      dailySummary: `Bring your emotions down to Earth today, Capricorn. Your imagination may run away with you. If you don't take a hard look at reality, you may find yourself in big trouble later. The higher you soar, the harder you fall. Make sure you have a working parachute. Be realistic about your current situation and act with confidence. Make sure you have the facts before you set goals and plans.`
    },
    {
      sign: 'sagittarius',
      signDates: 'Nov 22 - Dec 21',
      dailySummary: `You may have a hard time getting started today, Sagittarius. This might be a better time to plan. Be realistic and thoughtful in your actions. Be conscious of the steps you need to take to reach a certain goal. When in doubt, take the more conservative route. You will find that there is a great deal of support for that path. Don't get distracted along the way. Stay on target.`
    }
  ]

  return ( 
    <>
      {list.map((listItem) => (
        <ListItem {...listItem} />
      ))}
    </>
  );
});
