import IconEnhancedEncryptionFill0Wght100Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght100Grad0Opsz48'
import IconEnhancedEncryptionFill0Wght200Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght200Grad0Opsz48'
import IconEnhancedEncryptionFill0Wght300Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght300Grad0Opsz48'
import IconEnhancedEncryptionFill0Wght400Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght400Grad0Opsz48'
import IconEnhancedEncryptionFill0Wght500Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght500Grad0Opsz48'
import IconEnhancedEncryptionFill0Wght600Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght600Grad0Opsz48'
import IconEnhancedEncryptionFill0Wght700Grad0Opsz48 from '../components/EnhancedEncryptionFill0Wght700Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght100Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght100Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght200Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght200Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght300Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght300Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght400Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght400Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght500Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght500Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght600Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght600Grad0Opsz48'
import IconEnhancedEncryptionFill1Wght700Grad0Opsz48 from '../components/EnhancedEncryptionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEnhancedEncryption = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEnhancedEncryptionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEnhancedEncryptionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEnhancedEncryptionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEnhancedEncryptionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEnhancedEncryptionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEnhancedEncryptionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEnhancedEncryptionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEnhancedEncryptionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEnhancedEncryptionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEnhancedEncryptionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEnhancedEncryptionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEnhancedEncryptionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEnhancedEncryptionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEnhancedEncryptionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
