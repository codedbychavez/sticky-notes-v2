import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";
import Header from "../core/components/Header";
import FullPageLoader from "../core/components/FullPageLoader";
import getAbsoluteURL from "./utils/getAbsoluteURL";
import React from "react";
import {Navigation} from "../core/components/organisms/Navigation";

const MyStickies = () => {
    // The user is guarantee to be authenticated
    const AuthUser = useAuthUser()

    return (
        <div>
            <Navigation/>
            <Header email={AuthUser.email} signOut={AuthUser.signOut} />

            <section>
                Stickies will appear here.
            </section>
        </div>
    )
}

export default withAuthUser({
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    LoaderComponent: FullPageLoader,
})(MyStickies)