import * as React from 'react'
import './sass/css/home.css'
import { ImgBanner, VideoBanner } from '../../subComponents/banner'
import { CounterCard } from './counter'
import { InstructionCards } from './instructionCards'
import { API_DEV } from '../../containers/C_apiUrl'
import { googleLogin } from '../../containers/redux/actionCreators'
import { useAppDispatch } from '../../containers/redux/store.hooks'
import useLocalStorage from '../../containers/hooks/useLocalStorage'
import { Button } from '../../subComponents/button'

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
      <ImgBanner 
        shouldBeGrid={false}
        hasButton={true}
        buttonText='Get started'
        buttonLink='/signup'
        imgSrc={'https://i.ibb.co/R9pX6Zz/home-be-curious.png'} 
        title={"Best Start For Lazy NFT Creators"}
        description={
          [
            "Spread your artistic talent and Make them NFTs.",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi ab quisquam voluptatum velit, dignissimos",
            " Anyone interested in contributing is welcome."
          ]
        }/>

      <section id='counterContainer'>
        <span id='counterTitle'>
          Wide-open and transparent from the start. 
          The NFT project which you can trust.
        </span>
        <CounterCard 
          hasButton={false}
          description={'Users'} />
        <CounterCard 
          hasButton={false}
          description={'Contributors'} />
        <CounterCard 
          hasButton={false}
          description={'Github stars'} />
        <Button 
          btnText='Check github'
          url='https://github.com/developerasun/pawcon' />
      </section> 

      <div id="instructionCardsContainer">
        <InstructionCards 
          title='Create'
          hasButton={false}
          description={[
            "Creating and minting NFT with PawCon is easy and fun. ",
            "With HashLips NFT art engine, it only requires one click to create 10000 collections."
          ]}
          image={'https://i.ibb.co/5RMVbRS/woman-drawing.webp'}
        />
        <InstructionCards 
          title='Save'
          hasButton={false}
          description={[
            "PawCon supports Metamask transactions. ", 
            "Save the NFT in your wallet and protect the asset safely."
          ]}
          image={'https://i.ibb.co/TMtMV0S/phone-money.webp'}
        />
        <InstructionCards 
          title='Sell'
          description={[
            "Make NFTs become a new passive income for you. List and sell them in NFT marketplace. ", 
            "Start your own NFT business with PawCon."
          ]}
          image={'https://i.ibb.co/FsRQLdR/paper-bag.webp'}
          hasButton={true}
          buttonText={'Explore'}
        />
        <InstructionCards 
          title='Support'
          description={[
            "Maintaing a PawCon project is not easy task. Support developers by donating them a coffee. ", 
            "Make PawCon dev ecosystem keep sparking!"
          ]}
          image={'https://i.ibb.co/cTtgkpg/star-box.webp'}
          hasButton={true}
          buttonText={'Donate'}
        />
      </div>

      <VideoBanner 
        title='Meet PawCon' 
        videoSrc='https://www.youtube.com/embed/yAEyyedWCyk'
        description='Creative, artsy, fastest way to generate NFT artworks'
        hasButton={true}
        buttonText='Explore Gallery'
        buttonLink='/gallery'/>
    </div>
  );
}
