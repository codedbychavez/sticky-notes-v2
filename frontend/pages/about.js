import React from "react";
import Header from "../core/components/Header";
import FullPageLoader from "../core/components/FullPageLoader";
import GetAbsoluteURL from "./utils/getAbsoluteURL";
import {useAuthUser} from "next-firebase-auth";

const About = () => {
    // The user is guaranteed to be authenticated
    // const AuthUser = useAuthUser()

    return (
        <div>
            <p>
                This is a simple sticky note app built with nextjs
            </p>
        </div>
    )
}

export default About