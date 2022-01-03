import React from 'react'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../core/components/Header'
import DemoPageLinks from '../core/components/DemoPageLinks'

// Import styles components
import {H1} from "../core/components/atoms/H1";
import {Navigation} from "../core/components/organisms/Navigation";
import {AppContainer} from "../core/components/molecules/Container";
import {Hero} from "../core/components/organisms/Hero";
import {H4} from "../core/components/atoms/H4";

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Demo = () => {
  const AuthUser = useAuthUser()
  return (
      <div>
        <Navigation/>
        <AppContainer>
        <Header email={AuthUser.email} signOut={AuthUser.signOut} />

        <Hero>
          <H4>Sticky Notes App</H4>

        </Hero>
        <div style={styles.content}>
          <div style={styles.infoTextContainer}>

            <h3>Home</h3>

            <p>
              This page does not require authentication, so it wont redirect to
              the login page if you are not signed in.
            </p>
            <p>
              If you remove `getServerSideProps` from this page, it will be static
              and load the authed user only on the client side.
            </p>
          </div>
          <DemoPageLinks />
        </div>

      </AppContainer>
      </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Demo)
