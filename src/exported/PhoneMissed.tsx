import IconPhoneMissedFill0Wght100Grad0Opsz48 from '../components/PhoneMissedFill0Wght100Grad0Opsz48'
import IconPhoneMissedFill0Wght200Grad0Opsz48 from '../components/PhoneMissedFill0Wght200Grad0Opsz48'
import IconPhoneMissedFill0Wght300Grad0Opsz48 from '../components/PhoneMissedFill0Wght300Grad0Opsz48'
import IconPhoneMissedFill0Wght400Grad0Opsz48 from '../components/PhoneMissedFill0Wght400Grad0Opsz48'
import IconPhoneMissedFill0Wght500Grad0Opsz48 from '../components/PhoneMissedFill0Wght500Grad0Opsz48'
import IconPhoneMissedFill0Wght600Grad0Opsz48 from '../components/PhoneMissedFill0Wght600Grad0Opsz48'
import IconPhoneMissedFill0Wght700Grad0Opsz48 from '../components/PhoneMissedFill0Wght700Grad0Opsz48'
import IconPhoneMissedFill1Wght100Grad0Opsz48 from '../components/PhoneMissedFill1Wght100Grad0Opsz48'
import IconPhoneMissedFill1Wght200Grad0Opsz48 from '../components/PhoneMissedFill1Wght200Grad0Opsz48'
import IconPhoneMissedFill1Wght300Grad0Opsz48 from '../components/PhoneMissedFill1Wght300Grad0Opsz48'
import IconPhoneMissedFill1Wght400Grad0Opsz48 from '../components/PhoneMissedFill1Wght400Grad0Opsz48'
import IconPhoneMissedFill1Wght500Grad0Opsz48 from '../components/PhoneMissedFill1Wght500Grad0Opsz48'
import IconPhoneMissedFill1Wght600Grad0Opsz48 from '../components/PhoneMissedFill1Wght600Grad0Opsz48'
import IconPhoneMissedFill1Wght700Grad0Opsz48 from '../components/PhoneMissedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneMissed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneMissedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneMissedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneMissedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneMissedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneMissedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneMissedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneMissedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneMissedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneMissedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneMissedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneMissedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneMissedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneMissedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneMissedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
