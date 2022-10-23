import IconPhonelinkRingFill0Wght100Grad0Opsz48 from '../components/PhonelinkRingFill0Wght100Grad0Opsz48'
import IconPhonelinkRingFill0Wght200Grad0Opsz48 from '../components/PhonelinkRingFill0Wght200Grad0Opsz48'
import IconPhonelinkRingFill0Wght300Grad0Opsz48 from '../components/PhonelinkRingFill0Wght300Grad0Opsz48'
import IconPhonelinkRingFill0Wght400Grad0Opsz48 from '../components/PhonelinkRingFill0Wght400Grad0Opsz48'
import IconPhonelinkRingFill0Wght500Grad0Opsz48 from '../components/PhonelinkRingFill0Wght500Grad0Opsz48'
import IconPhonelinkRingFill0Wght600Grad0Opsz48 from '../components/PhonelinkRingFill0Wght600Grad0Opsz48'
import IconPhonelinkRingFill0Wght700Grad0Opsz48 from '../components/PhonelinkRingFill0Wght700Grad0Opsz48'
import IconPhonelinkRingFill1Wght100Grad0Opsz48 from '../components/PhonelinkRingFill1Wght100Grad0Opsz48'
import IconPhonelinkRingFill1Wght200Grad0Opsz48 from '../components/PhonelinkRingFill1Wght200Grad0Opsz48'
import IconPhonelinkRingFill1Wght300Grad0Opsz48 from '../components/PhonelinkRingFill1Wght300Grad0Opsz48'
import IconPhonelinkRingFill1Wght400Grad0Opsz48 from '../components/PhonelinkRingFill1Wght400Grad0Opsz48'
import IconPhonelinkRingFill1Wght500Grad0Opsz48 from '../components/PhonelinkRingFill1Wght500Grad0Opsz48'
import IconPhonelinkRingFill1Wght600Grad0Opsz48 from '../components/PhonelinkRingFill1Wght600Grad0Opsz48'
import IconPhonelinkRingFill1Wght700Grad0Opsz48 from '../components/PhonelinkRingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhonelinkRing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhonelinkRingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhonelinkRingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhonelinkRingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhonelinkRingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhonelinkRingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhonelinkRingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhonelinkRingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhonelinkRingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhonelinkRingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhonelinkRingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhonelinkRingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhonelinkRingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhonelinkRingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhonelinkRingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
