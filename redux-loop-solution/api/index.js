import friends from './friends';

// mock api search
export default function search(query) {
  return new Promise((resolve) => {
    const results = friends.filter(friend => {
      return Object.keys(friend).some(key => {
        const val = friend[key].toString();
        return val.toLowerCase().includes(query.toLowerCase());
      });
    });

    // setting a more realistic (random) timeout
    setTimeout(() => resolve(results), Math.ceil(Math.random() * 250));
  });
}
