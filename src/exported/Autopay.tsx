import IconAutopayFill0Wght100Grad0Opsz48 from '../components/AutopayFill0Wght100Grad0Opsz48'
import IconAutopayFill0Wght200Grad0Opsz48 from '../components/AutopayFill0Wght200Grad0Opsz48'
import IconAutopayFill0Wght300Grad0Opsz48 from '../components/AutopayFill0Wght300Grad0Opsz48'
import IconAutopayFill0Wght400Grad0Opsz48 from '../components/AutopayFill0Wght400Grad0Opsz48'
import IconAutopayFill0Wght500Grad0Opsz48 from '../components/AutopayFill0Wght500Grad0Opsz48'
import IconAutopayFill0Wght600Grad0Opsz48 from '../components/AutopayFill0Wght600Grad0Opsz48'
import IconAutopayFill0Wght700Grad0Opsz48 from '../components/AutopayFill0Wght700Grad0Opsz48'
import IconAutopayFill1Wght100Grad0Opsz48 from '../components/AutopayFill1Wght100Grad0Opsz48'
import IconAutopayFill1Wght200Grad0Opsz48 from '../components/AutopayFill1Wght200Grad0Opsz48'
import IconAutopayFill1Wght300Grad0Opsz48 from '../components/AutopayFill1Wght300Grad0Opsz48'
import IconAutopayFill1Wght400Grad0Opsz48 from '../components/AutopayFill1Wght400Grad0Opsz48'
import IconAutopayFill1Wght500Grad0Opsz48 from '../components/AutopayFill1Wght500Grad0Opsz48'
import IconAutopayFill1Wght600Grad0Opsz48 from '../components/AutopayFill1Wght600Grad0Opsz48'
import IconAutopayFill1Wght700Grad0Opsz48 from '../components/AutopayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutopay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutopayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutopayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutopayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutopayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutopayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutopayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutopayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutopayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutopayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutopayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutopayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutopayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutopayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutopayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
