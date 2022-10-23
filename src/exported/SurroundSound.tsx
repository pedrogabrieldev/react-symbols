import IconSurroundSoundFill0Wght100Grad0Opsz48 from '../components/SurroundSoundFill0Wght100Grad0Opsz48'
import IconSurroundSoundFill0Wght200Grad0Opsz48 from '../components/SurroundSoundFill0Wght200Grad0Opsz48'
import IconSurroundSoundFill0Wght300Grad0Opsz48 from '../components/SurroundSoundFill0Wght300Grad0Opsz48'
import IconSurroundSoundFill0Wght400Grad0Opsz48 from '../components/SurroundSoundFill0Wght400Grad0Opsz48'
import IconSurroundSoundFill0Wght500Grad0Opsz48 from '../components/SurroundSoundFill0Wght500Grad0Opsz48'
import IconSurroundSoundFill0Wght600Grad0Opsz48 from '../components/SurroundSoundFill0Wght600Grad0Opsz48'
import IconSurroundSoundFill0Wght700Grad0Opsz48 from '../components/SurroundSoundFill0Wght700Grad0Opsz48'
import IconSurroundSoundFill1Wght100Grad0Opsz48 from '../components/SurroundSoundFill1Wght100Grad0Opsz48'
import IconSurroundSoundFill1Wght200Grad0Opsz48 from '../components/SurroundSoundFill1Wght200Grad0Opsz48'
import IconSurroundSoundFill1Wght300Grad0Opsz48 from '../components/SurroundSoundFill1Wght300Grad0Opsz48'
import IconSurroundSoundFill1Wght400Grad0Opsz48 from '../components/SurroundSoundFill1Wght400Grad0Opsz48'
import IconSurroundSoundFill1Wght500Grad0Opsz48 from '../components/SurroundSoundFill1Wght500Grad0Opsz48'
import IconSurroundSoundFill1Wght600Grad0Opsz48 from '../components/SurroundSoundFill1Wght600Grad0Opsz48'
import IconSurroundSoundFill1Wght700Grad0Opsz48 from '../components/SurroundSoundFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSurroundSound = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSurroundSoundFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSurroundSoundFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSurroundSoundFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSurroundSoundFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSurroundSoundFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSurroundSoundFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSurroundSoundFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSurroundSoundFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSurroundSoundFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSurroundSoundFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSurroundSoundFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSurroundSoundFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSurroundSoundFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSurroundSoundFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
