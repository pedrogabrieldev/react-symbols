import IconSmartphoneFill0Wght100Grad0Opsz48 from '../components/SmartphoneFill0Wght100Grad0Opsz48'
import IconSmartphoneFill0Wght200Grad0Opsz48 from '../components/SmartphoneFill0Wght200Grad0Opsz48'
import IconSmartphoneFill0Wght300Grad0Opsz48 from '../components/SmartphoneFill0Wght300Grad0Opsz48'
import IconSmartphoneFill0Wght400Grad0Opsz48 from '../components/SmartphoneFill0Wght400Grad0Opsz48'
import IconSmartphoneFill0Wght500Grad0Opsz48 from '../components/SmartphoneFill0Wght500Grad0Opsz48'
import IconSmartphoneFill0Wght600Grad0Opsz48 from '../components/SmartphoneFill0Wght600Grad0Opsz48'
import IconSmartphoneFill0Wght700Grad0Opsz48 from '../components/SmartphoneFill0Wght700Grad0Opsz48'
import IconSmartphoneFill1Wght100Grad0Opsz48 from '../components/SmartphoneFill1Wght100Grad0Opsz48'
import IconSmartphoneFill1Wght200Grad0Opsz48 from '../components/SmartphoneFill1Wght200Grad0Opsz48'
import IconSmartphoneFill1Wght300Grad0Opsz48 from '../components/SmartphoneFill1Wght300Grad0Opsz48'
import IconSmartphoneFill1Wght400Grad0Opsz48 from '../components/SmartphoneFill1Wght400Grad0Opsz48'
import IconSmartphoneFill1Wght500Grad0Opsz48 from '../components/SmartphoneFill1Wght500Grad0Opsz48'
import IconSmartphoneFill1Wght600Grad0Opsz48 from '../components/SmartphoneFill1Wght600Grad0Opsz48'
import IconSmartphoneFill1Wght700Grad0Opsz48 from '../components/SmartphoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmartphone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmartphoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmartphoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmartphoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmartphoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmartphoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmartphoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmartphoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmartphoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmartphoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmartphoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmartphoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmartphoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmartphoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmartphoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
