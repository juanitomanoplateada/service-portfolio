import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ opacity: 0, transform: 'scale(1.05)', filter: 'sepia(0.5)' })
        ], { optional: true }),
        group([
            query(':leave', [
                animate('600ms cubic-bezier(0.35, 0, 0.25, 1)',
                    style({ opacity: 0, transform: 'scale(0.95)', filter: 'brightness(1.5) sepia(1)' }))
            ], { optional: true }),
            query(':enter', [
                animate('600ms cubic-bezier(0.35, 0, 0.25, 1)',
                    style({ opacity: 1, transform: 'scale(1)', filter: 'brightness(1) sepia(0)' }))
            ], { optional: true })
        ])
    ])
]);
