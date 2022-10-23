import IconPhonePausedFill0Wght100Grad0Opsz48 from '../components/PhonePausedFill0Wght100Grad0Opsz48'
import IconPhonePausedFill0Wght200Grad0Opsz48 from '../components/PhonePausedFill0Wght200Grad0Opsz48'
import IconPhonePausedFill0Wght300Grad0Opsz48 from '../components/PhonePausedFill0Wght300Grad0Opsz48'
import IconPhonePausedFill0Wght400Grad0Opsz48 from '../components/PhonePausedFill0Wght400Grad0Opsz48'
import IconPhonePausedFill0Wght500Grad0Opsz48 from '../components/PhonePausedFill0Wght500Grad0Opsz48'
import IconPhonePausedFill0Wght600Grad0Opsz48 from '../components/PhonePausedFill0Wght600Grad0Opsz48'
import IconPhonePausedFill0Wght700Grad0Opsz48 from '../components/PhonePausedFill0Wght700Grad0Opsz48'
import IconPhonePausedFill1Wght100Grad0Opsz48 from '../components/PhonePausedFill1Wght100Grad0Opsz48'
import IconPhonePausedFill1Wght200Grad0Opsz48 from '../components/PhonePausedFill1Wght200Grad0Opsz48'
import IconPhonePausedFill1Wght300Grad0Opsz48 from '../components/PhonePausedFill1Wght300Grad0Opsz48'
import IconPhonePausedFill1Wght400Grad0Opsz48 from '../components/PhonePausedFill1Wght400Grad0Opsz48'
import IconPhonePausedFill1Wght500Grad0Opsz48 from '../components/PhonePausedFill1Wght500Grad0Opsz48'
import IconPhonePausedFill1Wght600Grad0Opsz48 from '../components/PhonePausedFill1Wght600Grad0Opsz48'
import IconPhonePausedFill1Wght700Grad0Opsz48 from '../components/PhonePausedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhonePaused = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhonePausedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhonePausedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhonePausedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhonePausedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhonePausedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhonePausedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhonePausedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhonePausedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhonePausedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhonePausedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhonePausedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhonePausedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhonePausedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhonePausedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
