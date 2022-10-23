import IconScubaDivingFill0Wght100Grad0Opsz48 from '../components/ScubaDivingFill0Wght100Grad0Opsz48'
import IconScubaDivingFill0Wght200Grad0Opsz48 from '../components/ScubaDivingFill0Wght200Grad0Opsz48'
import IconScubaDivingFill0Wght300Grad0Opsz48 from '../components/ScubaDivingFill0Wght300Grad0Opsz48'
import IconScubaDivingFill0Wght400Grad0Opsz48 from '../components/ScubaDivingFill0Wght400Grad0Opsz48'
import IconScubaDivingFill0Wght500Grad0Opsz48 from '../components/ScubaDivingFill0Wght500Grad0Opsz48'
import IconScubaDivingFill0Wght600Grad0Opsz48 from '../components/ScubaDivingFill0Wght600Grad0Opsz48'
import IconScubaDivingFill0Wght700Grad0Opsz48 from '../components/ScubaDivingFill0Wght700Grad0Opsz48'
import IconScubaDivingFill1Wght100Grad0Opsz48 from '../components/ScubaDivingFill1Wght100Grad0Opsz48'
import IconScubaDivingFill1Wght200Grad0Opsz48 from '../components/ScubaDivingFill1Wght200Grad0Opsz48'
import IconScubaDivingFill1Wght300Grad0Opsz48 from '../components/ScubaDivingFill1Wght300Grad0Opsz48'
import IconScubaDivingFill1Wght400Grad0Opsz48 from '../components/ScubaDivingFill1Wght400Grad0Opsz48'
import IconScubaDivingFill1Wght500Grad0Opsz48 from '../components/ScubaDivingFill1Wght500Grad0Opsz48'
import IconScubaDivingFill1Wght600Grad0Opsz48 from '../components/ScubaDivingFill1Wght600Grad0Opsz48'
import IconScubaDivingFill1Wght700Grad0Opsz48 from '../components/ScubaDivingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScubaDiving = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScubaDivingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScubaDivingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScubaDivingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScubaDivingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScubaDivingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScubaDivingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScubaDivingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScubaDivingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScubaDivingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScubaDivingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScubaDivingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScubaDivingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScubaDivingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScubaDivingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
