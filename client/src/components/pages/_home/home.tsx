import * as React from 'react'
import './sass/css/home.css'
import { ImgBanner, VideoBanner } from '../../subComponents/banner'
import { CounterCard } from './counter'
import { InstructionCards } from './instructionCards'
import { API_DEV } from '../../containers/C_apiUrl'
import { googleLogin } from '../../containers/redux/actionCreators'
import { useAppDispatch } from '../../containers/redux/store.hooks'
import useLocalStorage from '../../containers/hooks/useLocalStorage'

export function Home () {  
  const dispatch = useAppDispatch()
  const ls = useLocalStorage()
  React.useEffect(() => {
    // check if there is a google login user
    console.log("current google login : " ,ls.getLocalItem("googleLogin"))
    
    if (ls.getLocalItem("googleLogin")) {
      fetch(API_DEV.oauth.google.user)
        .then((res) => {
          if (res.status === 200) { 
            console.log("Server approved google login")
            return res.json()
          }
          if (res.status === 401) {
            console.log("server denied google login")
            const error = res.json()
            return error
          }
        })
        .then((data) => {
          console.log(data) // contains 'success' property
          if (data.success) {
            // store google username in Redux store
            dispatch(googleLogin(data.username))
            console.log("google login success")
            ls.removeOneLocal("googleLogin")
          }
        })
        .catch((err) => console.log(err))
    }
  }, [dispatch, ls]) 
  return (
    <div id='home'>
      <div>
        <h1>Best Start For Lazy NFT Creators</h1>
        <ImgBanner 
          shouldBeGrid={true}
          img={'https://i.ibb.co/JmFhpYY/help-creators.webp'} 
          title={"We help creators"}
          description={"Spread your artistic talent and Make them NFTs"}/>

          <section id='counterContainer'>
            <CounterCard 
              hasButton={false}
              image='https://i.ibb.co/DfG593X/pawcon-user.png'
              description={'Users'} />
            <CounterCard 
              hasButton={false}
              image='https://i.ibb.co/JsRx70X/pawcon-contributor.png'
              description={'Contributors'} />
            <CounterCard 
              hasButton={false}
              image='https://i.ibb.co/6RCtZJG/pawcon-star.png'
              description={'Github stars'} />
          </section>
      </div>

      <div id="instructionCards">
        <InstructionCards 
          hasButton={false}
          description={`Create Your NFTs With Ease.`}
          image={'https://i.ibb.co/5RMVbRS/woman-drawing.webp'}
        />
        <InstructionCards 
          hasButton={false}
          description={["Save It To Wallet.", "Protect the asset safely."]}
          image={'https://i.ibb.co/TMtMV0S/phone-money.webp'}
        />
        <InstructionCards 
          description={["List It In Marketplace.", "Do Marketing And Make Sales."]}
          image={'https://i.ibb.co/FsRQLdR/paper-bag.webp'}
          hasButton={true}
          buttonText={'Explore'}
        />
        <InstructionCards 
          description={["Donate And Support.", "Buy Me A Coffee."]}
          image={'https://i.ibb.co/cTtgkpg/star-box.webp'}
          hasButton={true}
          buttonText={'Donate'}
        />
      </div>

      <VideoBanner 
        title='Meet PawCon' 
        buttonText='Explore Gallery' 
        linkTo='/gallery'/>

      <ImgBanner 
        shouldBeGrid={false}
        img={'https://i.ibb.co/tbfyGZw/salute-devs.webp'}/>

    </div>
  );
}
