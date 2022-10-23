import IconTamperDetectionOffFill0Wght100Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght100Grad0Opsz48'
import IconTamperDetectionOffFill0Wght200Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght200Grad0Opsz48'
import IconTamperDetectionOffFill0Wght300Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght300Grad0Opsz48'
import IconTamperDetectionOffFill0Wght400Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght400Grad0Opsz48'
import IconTamperDetectionOffFill0Wght500Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght500Grad0Opsz48'
import IconTamperDetectionOffFill0Wght600Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght600Grad0Opsz48'
import IconTamperDetectionOffFill0Wght700Grad0Opsz48 from '../components/TamperDetectionOffFill0Wght700Grad0Opsz48'
import IconTamperDetectionOffFill1Wght100Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght100Grad0Opsz48'
import IconTamperDetectionOffFill1Wght200Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght200Grad0Opsz48'
import IconTamperDetectionOffFill1Wght300Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght300Grad0Opsz48'
import IconTamperDetectionOffFill1Wght400Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght400Grad0Opsz48'
import IconTamperDetectionOffFill1Wght500Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght500Grad0Opsz48'
import IconTamperDetectionOffFill1Wght600Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght600Grad0Opsz48'
import IconTamperDetectionOffFill1Wght700Grad0Opsz48 from '../components/TamperDetectionOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTamperDetectionOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTamperDetectionOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTamperDetectionOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTamperDetectionOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTamperDetectionOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTamperDetectionOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTamperDetectionOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTamperDetectionOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTamperDetectionOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTamperDetectionOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTamperDetectionOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTamperDetectionOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTamperDetectionOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTamperDetectionOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTamperDetectionOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
