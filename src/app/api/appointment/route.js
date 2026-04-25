export async function POST(request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return Response.json({ success: false, error: "GOOGLE_SCRIPT_URL not set" }, { status: 500 });
  }

  try {
    const data = await request.json();

    const res = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      return Response.json(json);
    } catch {
      console.error("Google Script returned non-JSON:", text.slice(0, 300));
      return Response.json({ success: false, error: "script_auth" }, { status: 500 });
    }
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
