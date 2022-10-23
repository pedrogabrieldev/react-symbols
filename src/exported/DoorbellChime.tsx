import IconDoorbellChimeFill0Wght100Grad0Opsz48 from '../components/DoorbellChimeFill0Wght100Grad0Opsz48'
import IconDoorbellChimeFill0Wght200Grad0Opsz48 from '../components/DoorbellChimeFill0Wght200Grad0Opsz48'
import IconDoorbellChimeFill0Wght300Grad0Opsz48 from '../components/DoorbellChimeFill0Wght300Grad0Opsz48'
import IconDoorbellChimeFill0Wght400Grad0Opsz48 from '../components/DoorbellChimeFill0Wght400Grad0Opsz48'
import IconDoorbellChimeFill0Wght500Grad0Opsz48 from '../components/DoorbellChimeFill0Wght500Grad0Opsz48'
import IconDoorbellChimeFill0Wght600Grad0Opsz48 from '../components/DoorbellChimeFill0Wght600Grad0Opsz48'
import IconDoorbellChimeFill0Wght700Grad0Opsz48 from '../components/DoorbellChimeFill0Wght700Grad0Opsz48'
import IconDoorbellChimeFill1Wght100Grad0Opsz48 from '../components/DoorbellChimeFill1Wght100Grad0Opsz48'
import IconDoorbellChimeFill1Wght200Grad0Opsz48 from '../components/DoorbellChimeFill1Wght200Grad0Opsz48'
import IconDoorbellChimeFill1Wght300Grad0Opsz48 from '../components/DoorbellChimeFill1Wght300Grad0Opsz48'
import IconDoorbellChimeFill1Wght400Grad0Opsz48 from '../components/DoorbellChimeFill1Wght400Grad0Opsz48'
import IconDoorbellChimeFill1Wght500Grad0Opsz48 from '../components/DoorbellChimeFill1Wght500Grad0Opsz48'
import IconDoorbellChimeFill1Wght600Grad0Opsz48 from '../components/DoorbellChimeFill1Wght600Grad0Opsz48'
import IconDoorbellChimeFill1Wght700Grad0Opsz48 from '../components/DoorbellChimeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorbellChime = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorbellChimeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorbellChimeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorbellChimeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorbellChimeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorbellChimeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorbellChimeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorbellChimeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorbellChimeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorbellChimeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorbellChimeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorbellChimeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorbellChimeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorbellChimeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorbellChimeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
