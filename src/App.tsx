import { Layout } from "./components/layout/Layout";
import { ReactNode } from "react";

function App({ children }: { children: ReactNode }) {
  return (
      <Layout>
        {children}
      </Layout>
  )
}

export default App
