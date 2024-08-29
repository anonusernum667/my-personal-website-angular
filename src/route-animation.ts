import { transition, trigger, query, style, animate, state } from "@angular/animations";

export const routeTransition = trigger('transition', [
  // Define the 'enter' state
  state('enter', style({
    transform: 'scale(1)',
    opacity: 1
  })),

  // Define the 'leave' state
  state('leave', style({
    transform: 'scale(0.5)',
    opacity: 0
  })),

  // Transition for entering (scaling and fading in)
  transition('void => enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate('300ms ease-in', style({ transform: 'scale(1)', opacity: 1 }))
  ]),

  // Transition for leaving (scaling down and fading out, with a melt effect)
  transition('enter => void', [
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('300ms ease-out', style({ transform: 'scale(0.5)', opacity: 0 }))
  ])
]);
