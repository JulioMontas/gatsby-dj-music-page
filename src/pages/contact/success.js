import React from "react"
import Layout from "../../components/layout"
import useWindowSize from "use-window-size-v2";
import Confetti from 'react-confetti'

export default function SuccessPage() {
  const { width, height } = useWindowSize(100); // wait 100ms for the resiz
  return (
    <Layout>
      <Confetti
        width={width}
        height={height}
      />
      <div className="text-[#FFEA00] sm:text-2xl lg:text-4xl">
        <h2 className="">Thank You!</h2>
      </div>
    </Layout>
  )
}
