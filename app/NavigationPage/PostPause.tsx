export default async function PostPause() {
  const res = await fetch("http://localhost:5001/screen/search/pause", {
    method: "POST",
    body: "Pause",
  });
  console.log("Pause");
  return;
}
