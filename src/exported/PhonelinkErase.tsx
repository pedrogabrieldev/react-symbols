import IconPhonelinkEraseFill0Wght100Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght100Grad0Opsz48'
import IconPhonelinkEraseFill0Wght200Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght200Grad0Opsz48'
import IconPhonelinkEraseFill0Wght300Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght300Grad0Opsz48'
import IconPhonelinkEraseFill0Wght400Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght400Grad0Opsz48'
import IconPhonelinkEraseFill0Wght500Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght500Grad0Opsz48'
import IconPhonelinkEraseFill0Wght600Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght600Grad0Opsz48'
import IconPhonelinkEraseFill0Wght700Grad0Opsz48 from '../components/PhonelinkEraseFill0Wght700Grad0Opsz48'
import IconPhonelinkEraseFill1Wght100Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght100Grad0Opsz48'
import IconPhonelinkEraseFill1Wght200Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght200Grad0Opsz48'
import IconPhonelinkEraseFill1Wght300Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght300Grad0Opsz48'
import IconPhonelinkEraseFill1Wght400Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght400Grad0Opsz48'
import IconPhonelinkEraseFill1Wght500Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght500Grad0Opsz48'
import IconPhonelinkEraseFill1Wght600Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght600Grad0Opsz48'
import IconPhonelinkEraseFill1Wght700Grad0Opsz48 from '../components/PhonelinkEraseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhonelinkErase = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhonelinkEraseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhonelinkEraseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhonelinkEraseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhonelinkEraseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhonelinkEraseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhonelinkEraseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhonelinkEraseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhonelinkEraseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhonelinkEraseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhonelinkEraseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhonelinkEraseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhonelinkEraseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhonelinkEraseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhonelinkEraseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
