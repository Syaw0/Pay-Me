import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import TopNav from './components/topNav';
import DetailSection from './components/detailSection';
import Inputs from './components/inputs';
import Footer from './components/footer';
import ErrorCon from './components/Error';
import { useStore } from './store/store';
import { isBuffer } from 'util';

function App() {

  globalStyle()
const isError = useStore(state=>state.isError)

  if(isError){
    setTimeout(()=>{
      window.location.reload()
    } , 3000)
  }

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
      {isError && <ErrorCon/>}
    </Flex>
  );
}

export default App;
