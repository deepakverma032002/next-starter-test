'use client'

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

import Typography from 'design-systems/Atoms/Typography'
import Layout from 'design-systems/Organisms/Layout'

const HomePageTemplate: React.FC = () => {
  return (
    <Layout>
      <main>
        <GoogleOAuthProvider clientId={'1080803887954-f5h0j9bmungd1qmt6eoc08odbi4ojb10.apps.googleusercontent.com'}>
          <GoogleLogin
            useOneTap
            onError={() => {
              console.info('Login Failed')
            }}
            onSuccess={(credentialResponse: any) => {
              console.info(credentialResponse)
            }}
          />
        </GoogleOAuthProvider>
      </main>
    </Layout>
  )
}

export default HomePageTemplate
