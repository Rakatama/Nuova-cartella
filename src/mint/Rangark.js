import { useRive } from 'rive-react';
import { useEffect, useState } from 'react';
import rangark from './rivefiles/Rangark.riv'

export default function Rangark() {
    const { rive, RiveComponent, canvas } = useRive({
        src: rangark,
        autoplay: true,
    });

    const [riveLoaded, setRiveLoaded] = useState(false)
    useEffect(() => {

        if (rive) {
            setRiveLoaded(true)
            rive.play("Melian")
        }
    }, [rive, canvas])

    return (
        <div className='rangark_div' >
            <RiveComponent id='rangark_canvas' />
            {riveLoaded &&
                <div id='rangark_div_child'>
                    <img src="/assets/images/Rangark Marchio.webp" alt="rangarkmarchio" id='rangark_img' />
                </div>
            }
        </div>
    );
}

