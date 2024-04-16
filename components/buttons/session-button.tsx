import {auth, signIn, signOut} from "@/auth/auth";

import {Button} from "../ui/button";

export default async function SessionButton() {
  const session = await auth();

  return (
    <>
      {session !== null ? (
        <form
          action={async () => {
            "use server";
            await signOut({redirectTo: "/"});
          }}
        >
          <Button variant="destructive">Log Out</Button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button variant="outline">Sign in</Button>
        </form>
      )}
    </>
  );
}
