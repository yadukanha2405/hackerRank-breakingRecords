import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function breakingRecords(scores) {
  // Write your code here
  let minScore = scores[0];
  let maxScore = scores[0];
  let result1 = 0;
  let result2 = 0;
  let final = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      result1++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      result2++;
    }
  }
  final.push(result1);
  final.push(result2);
  return final;
}

let x = breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
console.log(x);
