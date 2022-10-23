import IconBringYourOwnIpFill0Wght100Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght100Grad0Opsz48'
import IconBringYourOwnIpFill0Wght200Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght200Grad0Opsz48'
import IconBringYourOwnIpFill0Wght300Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght300Grad0Opsz48'
import IconBringYourOwnIpFill0Wght400Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght400Grad0Opsz48'
import IconBringYourOwnIpFill0Wght500Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght500Grad0Opsz48'
import IconBringYourOwnIpFill0Wght600Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght600Grad0Opsz48'
import IconBringYourOwnIpFill0Wght700Grad0Opsz48 from '../components/BringYourOwnIpFill0Wght700Grad0Opsz48'
import IconBringYourOwnIpFill1Wght100Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght100Grad0Opsz48'
import IconBringYourOwnIpFill1Wght200Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght200Grad0Opsz48'
import IconBringYourOwnIpFill1Wght300Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght300Grad0Opsz48'
import IconBringYourOwnIpFill1Wght400Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght400Grad0Opsz48'
import IconBringYourOwnIpFill1Wght500Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght500Grad0Opsz48'
import IconBringYourOwnIpFill1Wght600Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght600Grad0Opsz48'
import IconBringYourOwnIpFill1Wght700Grad0Opsz48 from '../components/BringYourOwnIpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBringYourOwnIp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBringYourOwnIpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBringYourOwnIpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBringYourOwnIpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBringYourOwnIpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBringYourOwnIpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBringYourOwnIpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBringYourOwnIpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBringYourOwnIpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBringYourOwnIpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBringYourOwnIpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBringYourOwnIpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBringYourOwnIpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBringYourOwnIpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBringYourOwnIpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
