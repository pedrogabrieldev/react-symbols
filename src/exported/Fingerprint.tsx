import IconFingerprintFill0Wght100Grad0Opsz48 from '../components/FingerprintFill0Wght100Grad0Opsz48'
import IconFingerprintFill0Wght200Grad0Opsz48 from '../components/FingerprintFill0Wght200Grad0Opsz48'
import IconFingerprintFill0Wght300Grad0Opsz48 from '../components/FingerprintFill0Wght300Grad0Opsz48'
import IconFingerprintFill0Wght400Grad0Opsz48 from '../components/FingerprintFill0Wght400Grad0Opsz48'
import IconFingerprintFill0Wght500Grad0Opsz48 from '../components/FingerprintFill0Wght500Grad0Opsz48'
import IconFingerprintFill0Wght600Grad0Opsz48 from '../components/FingerprintFill0Wght600Grad0Opsz48'
import IconFingerprintFill0Wght700Grad0Opsz48 from '../components/FingerprintFill0Wght700Grad0Opsz48'
import IconFingerprintFill1Wght100Grad0Opsz48 from '../components/FingerprintFill1Wght100Grad0Opsz48'
import IconFingerprintFill1Wght200Grad0Opsz48 from '../components/FingerprintFill1Wght200Grad0Opsz48'
import IconFingerprintFill1Wght300Grad0Opsz48 from '../components/FingerprintFill1Wght300Grad0Opsz48'
import IconFingerprintFill1Wght400Grad0Opsz48 from '../components/FingerprintFill1Wght400Grad0Opsz48'
import IconFingerprintFill1Wght500Grad0Opsz48 from '../components/FingerprintFill1Wght500Grad0Opsz48'
import IconFingerprintFill1Wght600Grad0Opsz48 from '../components/FingerprintFill1Wght600Grad0Opsz48'
import IconFingerprintFill1Wght700Grad0Opsz48 from '../components/FingerprintFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFingerprint = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFingerprintFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFingerprintFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFingerprintFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFingerprintFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFingerprintFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFingerprintFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFingerprintFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFingerprintFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFingerprintFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFingerprintFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFingerprintFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFingerprintFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFingerprintFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFingerprintFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
