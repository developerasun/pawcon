import * as React from 'react';
import { IMG_FEATURE } from '../containers/imgContainer'


export interface IFeatureProps {
}

export function Feature (props: IFeatureProps) {
  return (
    <div>
      
    {/* PawCon promotion banner here */}

    {/* Explain PawCon features */}
    <div className="intro-title">
            <h2>What is PawCon?</h2>
        </div>
        <div className="logo-img">
            <img src="../img/logo/pawcon-logo.png" 
                loading="lazy"
                alt="logo"/>
        </div>
        <div className="intro-paragraph">
            <p>
                
            </p>
            <p>
                It targets to provide easy and fun ways to create NFT artwork without any technical/artistic background. 
            </p>
        </div>


            <div className="middle">
            <div className="middle-title">
                <h2>Why PawCon?</h2>
            </div>
            <div className="middle-paragraph">
                <div className="feature">
                    <img src="../img/icon/draw-cat.png" 
                        loading="lazy"
                        alt="cat icon"/>
                    <h3>Premade Templates</h3>
                    <p>Pick template and draw on it.</p>
                </div>
                <div className="feature">
                    <img src="../img/icon/right-click.png" 
                        loading="lazy"
                        alt="computer mouser icon"/>
                    <h3>One-click Drawing</h3>
                    <p>One-click and Your artwork is ready</p>
                </div>
                <div className="feature">
                    <img src="../img/icon/camera.png" 
                        loading="lazy"
                        alt="camera icon"/>
                    <h3>One-click Art Filter</h3>
                    <p>One-click and Filter your images</p>
                </div>
            </div>
        </div>
    </div>
  );
}
