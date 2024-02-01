import { useRive } from 'rive-react';
import { useEffect, useState } from 'react';
import sabrian from './rivefiles/MintingPage.riv'

export default function Sabrian() {
    const { rive, RiveComponent, canvas } = useRive({
        src: sabrian,
        autoplay: true,
        artboard:"Sabrian",
        stateMachines:"State Machine 1",
    });

    const [riveLoaded, setRiveLoaded] = useState(false)

    useEffect(() => {
        if (rive) {
            setRiveLoaded(true)
        }
    }, [rive, canvas])

    return (
        <div className='sabrian_div' >
            <RiveComponent id='sabrian_canvas' />
            {riveLoaded &&
                <div id='rangark_div_child'>
                    <img src="/assets/images/Sabrian Marchio.webp" alt="sabrianmarchio" id='rangark_img' />
                </div>
            }
        </div>
    );
}

