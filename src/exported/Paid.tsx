import IconPaidFill0Wght100Grad0Opsz48 from '../components/PaidFill0Wght100Grad0Opsz48'
import IconPaidFill0Wght200Grad0Opsz48 from '../components/PaidFill0Wght200Grad0Opsz48'
import IconPaidFill0Wght300Grad0Opsz48 from '../components/PaidFill0Wght300Grad0Opsz48'
import IconPaidFill0Wght400Grad0Opsz48 from '../components/PaidFill0Wght400Grad0Opsz48'
import IconPaidFill0Wght500Grad0Opsz48 from '../components/PaidFill0Wght500Grad0Opsz48'
import IconPaidFill0Wght600Grad0Opsz48 from '../components/PaidFill0Wght600Grad0Opsz48'
import IconPaidFill0Wght700Grad0Opsz48 from '../components/PaidFill0Wght700Grad0Opsz48'
import IconPaidFill1Wght100Grad0Opsz48 from '../components/PaidFill1Wght100Grad0Opsz48'
import IconPaidFill1Wght200Grad0Opsz48 from '../components/PaidFill1Wght200Grad0Opsz48'
import IconPaidFill1Wght300Grad0Opsz48 from '../components/PaidFill1Wght300Grad0Opsz48'
import IconPaidFill1Wght400Grad0Opsz48 from '../components/PaidFill1Wght400Grad0Opsz48'
import IconPaidFill1Wght500Grad0Opsz48 from '../components/PaidFill1Wght500Grad0Opsz48'
import IconPaidFill1Wght600Grad0Opsz48 from '../components/PaidFill1Wght600Grad0Opsz48'
import IconPaidFill1Wght700Grad0Opsz48 from '../components/PaidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPaid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPaidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPaidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPaidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPaidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPaidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPaidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPaidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPaidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPaidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPaidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPaidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPaidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPaidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPaidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
