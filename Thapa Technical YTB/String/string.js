// Display only 280 characters of a string like the one used in Twitter

const myTweet = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque amet id ab explicabo, possimus vitae quasi unde doloribus doloremque molestiae est repellat dolor dolorem reprehenderit? Soluta quam possimus dolorem autem obcaecati. A suscipit, officia temporibus ipsam doloribus alias voluptate!";

console.log(`Length of original tweet = ${myTweet.length}`);

const newTweet = myTweet.slice(0, 280);
console.log(newTweet);
console.log(`Length of new tweet = ${newTweet.length}`);