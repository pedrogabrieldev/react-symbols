import IconPhonelinkSetupFill0Wght100Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght100Grad0Opsz48'
import IconPhonelinkSetupFill0Wght200Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght200Grad0Opsz48'
import IconPhonelinkSetupFill0Wght300Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght300Grad0Opsz48'
import IconPhonelinkSetupFill0Wght400Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght400Grad0Opsz48'
import IconPhonelinkSetupFill0Wght500Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght500Grad0Opsz48'
import IconPhonelinkSetupFill0Wght600Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght600Grad0Opsz48'
import IconPhonelinkSetupFill0Wght700Grad0Opsz48 from '../components/PhonelinkSetupFill0Wght700Grad0Opsz48'
import IconPhonelinkSetupFill1Wght100Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght100Grad0Opsz48'
import IconPhonelinkSetupFill1Wght200Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght200Grad0Opsz48'
import IconPhonelinkSetupFill1Wght300Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght300Grad0Opsz48'
import IconPhonelinkSetupFill1Wght400Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght400Grad0Opsz48'
import IconPhonelinkSetupFill1Wght500Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght500Grad0Opsz48'
import IconPhonelinkSetupFill1Wght600Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght600Grad0Opsz48'
import IconPhonelinkSetupFill1Wght700Grad0Opsz48 from '../components/PhonelinkSetupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhonelinkSetup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhonelinkSetupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhonelinkSetupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhonelinkSetupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhonelinkSetupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhonelinkSetupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhonelinkSetupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhonelinkSetupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhonelinkSetupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhonelinkSetupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhonelinkSetupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhonelinkSetupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhonelinkSetupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhonelinkSetupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhonelinkSetupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
