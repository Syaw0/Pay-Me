import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import TopNav from './components/topNav';
import DetailSection from './components/detailSection';
import Inputs from './components/inputs';
import Footer from './components/footer';

window.addEventListener("resize", () => {
  let root = document.getElementById("root")!
  // root.width = window.innerWidth;
  console.log(root)
});


function App() {

  globalStyle()



  return (
    <Flex  id='wrapper' dir={"column"} justify="start" align={"center"} data-testid="app" css={{
      // padding:"$2 300px" ,
      width:"600px",
      minHeight:"100vh",
      "@bp2":{
        width:"100%",
        padding:"$1"
      }

    }} >
      <TopNav/>
      <DetailSection/>
      <Inputs/>
      <Footer/>
    </Flex>
  );
}

export default App;
