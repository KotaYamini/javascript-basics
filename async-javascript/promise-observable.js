import { Observable } from 'rxjs';

// Promise
/*
1. Promise will call as soon as we define it, as it is eager to load.
2. Promise can emit single value beacuse it will return only once.
3. Once we create promise,we can't unsubscribe it.
4. There is no cancellation once promise is intialized.
*/
const promise = new Promise((resolve, reject) => {
    console.log('promise>>>>');
    setTimeout(() => {
        resolve("Promise Working1");
        resolve("Promise Working2");
        resolve("Promise Working3");
        resolve("Promise Working4");
        resolve("Promise Working5");
        resolve("Promise Working6");
    }, 1000);
})

promise.then((r) => console.log('promise>>>>>>', r));


// Observable
/**
 * Until & Unless we subscribe to the observable , it wont call.
 * Observable will return the values over a period of time.
 * Observables behaves like an array to apply some operation on the data like rxjs operators.
 * We can cancel the observable using unsubscribe method on observable
 * Why we unsubscribe the observable memory leakage when we route/navigate to other pages as well , this happens same using setInterval.
 */

const observable = new Observable(sub => {
    setTimeout(() => {
        sub.next('Observable Working1');
        sub.next('Observable Working2');
        sub.next('Observable Working3');
        sub.next('Observable Working4');
        sub.next('Observable Working5');
        sub.next('Observable Working6');
    }, 1000);
    // let counter = 0;
    // setInterval(() => {
    //     counter = counter + 1;
    //     sub.next(counter);
    // }, 1000);
});
//observable.pipe(filter(d => d === 'Observable Working1'), tap(r => console.log(r)));
observable.subscribe(data => console.log('observable>>>>>>', data));