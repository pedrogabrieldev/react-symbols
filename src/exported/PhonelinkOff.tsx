import IconPhonelinkOffFill0Wght100Grad0Opsz48 from '../components/PhonelinkOffFill0Wght100Grad0Opsz48'
import IconPhonelinkOffFill0Wght200Grad0Opsz48 from '../components/PhonelinkOffFill0Wght200Grad0Opsz48'
import IconPhonelinkOffFill0Wght300Grad0Opsz48 from '../components/PhonelinkOffFill0Wght300Grad0Opsz48'
import IconPhonelinkOffFill0Wght400Grad0Opsz48 from '../components/PhonelinkOffFill0Wght400Grad0Opsz48'
import IconPhonelinkOffFill0Wght500Grad0Opsz48 from '../components/PhonelinkOffFill0Wght500Grad0Opsz48'
import IconPhonelinkOffFill0Wght600Grad0Opsz48 from '../components/PhonelinkOffFill0Wght600Grad0Opsz48'
import IconPhonelinkOffFill0Wght700Grad0Opsz48 from '../components/PhonelinkOffFill0Wght700Grad0Opsz48'
import IconPhonelinkOffFill1Wght100Grad0Opsz48 from '../components/PhonelinkOffFill1Wght100Grad0Opsz48'
import IconPhonelinkOffFill1Wght200Grad0Opsz48 from '../components/PhonelinkOffFill1Wght200Grad0Opsz48'
import IconPhonelinkOffFill1Wght300Grad0Opsz48 from '../components/PhonelinkOffFill1Wght300Grad0Opsz48'
import IconPhonelinkOffFill1Wght400Grad0Opsz48 from '../components/PhonelinkOffFill1Wght400Grad0Opsz48'
import IconPhonelinkOffFill1Wght500Grad0Opsz48 from '../components/PhonelinkOffFill1Wght500Grad0Opsz48'
import IconPhonelinkOffFill1Wght600Grad0Opsz48 from '../components/PhonelinkOffFill1Wght600Grad0Opsz48'
import IconPhonelinkOffFill1Wght700Grad0Opsz48 from '../components/PhonelinkOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhonelinkOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhonelinkOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhonelinkOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhonelinkOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhonelinkOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhonelinkOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhonelinkOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhonelinkOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhonelinkOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhonelinkOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhonelinkOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhonelinkOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhonelinkOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhonelinkOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhonelinkOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
