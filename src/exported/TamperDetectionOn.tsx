import IconTamperDetectionOnFill0Wght100Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght100Grad0Opsz48'
import IconTamperDetectionOnFill0Wght200Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght200Grad0Opsz48'
import IconTamperDetectionOnFill0Wght300Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght300Grad0Opsz48'
import IconTamperDetectionOnFill0Wght400Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght400Grad0Opsz48'
import IconTamperDetectionOnFill0Wght500Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght500Grad0Opsz48'
import IconTamperDetectionOnFill0Wght600Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght600Grad0Opsz48'
import IconTamperDetectionOnFill0Wght700Grad0Opsz48 from '../components/TamperDetectionOnFill0Wght700Grad0Opsz48'
import IconTamperDetectionOnFill1Wght100Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght100Grad0Opsz48'
import IconTamperDetectionOnFill1Wght200Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght200Grad0Opsz48'
import IconTamperDetectionOnFill1Wght300Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght300Grad0Opsz48'
import IconTamperDetectionOnFill1Wght400Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght400Grad0Opsz48'
import IconTamperDetectionOnFill1Wght500Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght500Grad0Opsz48'
import IconTamperDetectionOnFill1Wght600Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght600Grad0Opsz48'
import IconTamperDetectionOnFill1Wght700Grad0Opsz48 from '../components/TamperDetectionOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTamperDetectionOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTamperDetectionOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTamperDetectionOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTamperDetectionOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTamperDetectionOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTamperDetectionOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTamperDetectionOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTamperDetectionOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTamperDetectionOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTamperDetectionOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTamperDetectionOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTamperDetectionOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTamperDetectionOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTamperDetectionOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTamperDetectionOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
