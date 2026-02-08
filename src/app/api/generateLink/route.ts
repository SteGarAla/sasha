import { nanoid } from "nanoid";

export async function POST() {
  const urlEnding = nanoid(8);
  // needs to check database to see if exist
  // if it does -> attempt again
  // return below...

  return Response.json({ urlEnding });
}
