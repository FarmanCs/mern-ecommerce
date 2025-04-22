export async function POST(req) {
  console.log("we havae fiel data..");
  const data = await req.formData();
  console.log(data.get("file"));
  if (data.get("file")) {
    console.log("we have file data....");
    console.log("we have file data ", data.get("file"));
  }
  return Response.json(true);
}
