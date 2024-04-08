export default async function PostCancel() {
  const res = await fetch("http://localhost:5001/screen/search/cancel", {
    method: "POST",
    body: "Cancel Operation",
  });
  console.log("Cancel Operation");
  return;
}
