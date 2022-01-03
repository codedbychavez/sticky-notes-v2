import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";
import Header from "../core/components/Header";
import FullPageLoader from "../core/components/FullPageLoader";
import getAbsoluteURL from "./utils/getAbsoluteURL";
import React from "react";
import {Navigation} from "../core/components/organisms/Navigation";

// Apollo client
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const MyStickies = ({ stickies }) => {

    console.log('I am here')
    console.log(stickies)
    console.log('I am gone')
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


// This function gets called at build time
export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'http://localhost:8000/graphql',
        cache: new InMemoryCache()
      })

      const { data } = await client.query({
          query: gql`
          {
            draftsByUser
            (
              userUniqueInput: {
              id: 1
            }
            )
            {
              title
            }
          }
          `
      })
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        stickies: data.draftsByUser,
      },
    }
  }