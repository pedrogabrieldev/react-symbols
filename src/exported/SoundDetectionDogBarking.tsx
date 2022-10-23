import IconSoundDetectionDogBarkingFill0Wght100Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght100Grad0Opsz48'
import IconSoundDetectionDogBarkingFill0Wght200Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght200Grad0Opsz48'
import IconSoundDetectionDogBarkingFill0Wght300Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght300Grad0Opsz48'
import IconSoundDetectionDogBarkingFill0Wght400Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght400Grad0Opsz48'
import IconSoundDetectionDogBarkingFill0Wght500Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght500Grad0Opsz48'
import IconSoundDetectionDogBarkingFill0Wght600Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght600Grad0Opsz48'
import IconSoundDetectionDogBarkingFill0Wght700Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill0Wght700Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght100Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght100Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght200Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght200Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght300Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght300Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght400Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght400Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght500Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght500Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght600Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght600Grad0Opsz48'
import IconSoundDetectionDogBarkingFill1Wght700Grad0Opsz48 from '../components/SoundDetectionDogBarkingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSoundDetectionDogBarking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSoundDetectionDogBarkingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSoundDetectionDogBarkingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSoundDetectionDogBarkingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSoundDetectionDogBarkingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSoundDetectionDogBarkingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSoundDetectionDogBarkingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSoundDetectionDogBarkingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSoundDetectionDogBarkingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSoundDetectionDogBarkingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSoundDetectionDogBarkingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSoundDetectionDogBarkingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSoundDetectionDogBarkingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSoundDetectionDogBarkingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSoundDetectionDogBarkingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
