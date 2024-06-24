'use client'

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

import Typography from 'design-systems/Atoms/Typography'
import Layout from 'design-systems/Organisms/Layout'

const HomePageTemplate: React.FC = () => {
  return (
    <Layout>
      <main>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
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
