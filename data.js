async function getData() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbwTYYXaizRRtFwxIQaEJjQVHY0QrNALiRVJ9saSn0Sr3X4wnpOntcDmWQ9POAR9o_Yi/exec"
  );
  const data = await res.json();
  console.log(data);
}

getData();
