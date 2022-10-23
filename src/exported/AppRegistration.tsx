import IconAppRegistrationFill0Wght100Grad0Opsz48 from '../components/AppRegistrationFill0Wght100Grad0Opsz48'
import IconAppRegistrationFill0Wght200Grad0Opsz48 from '../components/AppRegistrationFill0Wght200Grad0Opsz48'
import IconAppRegistrationFill0Wght300Grad0Opsz48 from '../components/AppRegistrationFill0Wght300Grad0Opsz48'
import IconAppRegistrationFill0Wght400Grad0Opsz48 from '../components/AppRegistrationFill0Wght400Grad0Opsz48'
import IconAppRegistrationFill0Wght500Grad0Opsz48 from '../components/AppRegistrationFill0Wght500Grad0Opsz48'
import IconAppRegistrationFill0Wght600Grad0Opsz48 from '../components/AppRegistrationFill0Wght600Grad0Opsz48'
import IconAppRegistrationFill0Wght700Grad0Opsz48 from '../components/AppRegistrationFill0Wght700Grad0Opsz48'
import IconAppRegistrationFill1Wght100Grad0Opsz48 from '../components/AppRegistrationFill1Wght100Grad0Opsz48'
import IconAppRegistrationFill1Wght200Grad0Opsz48 from '../components/AppRegistrationFill1Wght200Grad0Opsz48'
import IconAppRegistrationFill1Wght300Grad0Opsz48 from '../components/AppRegistrationFill1Wght300Grad0Opsz48'
import IconAppRegistrationFill1Wght400Grad0Opsz48 from '../components/AppRegistrationFill1Wght400Grad0Opsz48'
import IconAppRegistrationFill1Wght500Grad0Opsz48 from '../components/AppRegistrationFill1Wght500Grad0Opsz48'
import IconAppRegistrationFill1Wght600Grad0Opsz48 from '../components/AppRegistrationFill1Wght600Grad0Opsz48'
import IconAppRegistrationFill1Wght700Grad0Opsz48 from '../components/AppRegistrationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAppRegistration = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAppRegistrationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAppRegistrationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAppRegistrationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAppRegistrationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAppRegistrationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAppRegistrationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAppRegistrationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAppRegistrationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAppRegistrationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAppRegistrationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAppRegistrationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAppRegistrationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAppRegistrationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAppRegistrationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
