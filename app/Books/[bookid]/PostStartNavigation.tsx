// Posting start navigation to book request
export default async function startNavigationRequest() {
  const res = await fetch("http://localhost:5001/moveToBook", {
    method: "POST",
    body: "Start navigation to book",
  });
  console.log("start navigation request is posted");
  return;
}
